# backend/app/crud/suggestion.py
# --- MODIFIED FILE ---
# Corrected the import statements to be more specific.

from sqlalchemy.orm import Session
from sqlalchemy import func, case
from ..models.user import User # Corrected import
from ..models.carbon_entry import CarbonEntry # Corrected import
from datetime import date, timedelta

def generate_suggestion(db: Session, user_id: int) -> str:
    """
    Analyzes the last 30 days of a user's entries to find their highest
    emission category and returns a personalized suggestion.
    """
    thirty_days_ago = date.today() - timedelta(days=30)

    # Calculate total emissions per category for the last 30 days
    emissions_by_category = (
        db.query(
            func.sum(CarbonEntry.electricity_kwh * 0.85).label("electricity_co2"),
            func.sum(CarbonEntry.distance_km * 0.21).label("transport_co2"), # Using a general factor for now
            func.sum(
                case(
                    (CarbonEntry.food_choice == 'beef', 9.0),
                    (CarbonEntry.food_choice == 'pork', 4.0),
                    (CarbonEntry.food_choice == 'chicken', 2.5),
                    (CarbonEntry.food_choice == 'fish', 2.0),
                    (CarbonEntry.food_choice == 'plant_based', 1.0),
                    (CarbonEntry.food_choice == 'vegetables_grains', 0.5),
                    else_=0.0
                )
            ).label("food_co2")
        )
        .filter(CarbonEntry.owner_id == user_id)
        .filter(CarbonEntry.entry_date >= thirty_days_ago)
        .first()
    )

    if not emissions_by_category or all(v is None for v in emissions_by_category):
        return "Log some entries for a few days to get your first personalized eco-suggestion!"

    # Create a dictionary of categories and their total emissions
    totals = {
        "electricity": float(emissions_by_category.electricity_co2 or 0),
        "transport": float(emissions_by_category.transport_co2 or 0),
        "food": float(emissions_by_category.food_co2 or 0),
    }

    # Find the category with the highest emissions
    if not any(totals.values()):
         return "Your carbon footprint is looking great! Keep up the good work."

    highest_category = max(totals, key=totals.get)

    # Provide a suggestion based on the highest category
    if highest_category == "electricity":
        return "Your electricity usage is your biggest impact area. Try unplugging devices when not in use or switching to LED bulbs."
    elif highest_category == "transport":
        return "Transportation is your largest source of emissions. Consider walking, biking, or using public transport for one trip this week."
    elif highest_category == "food":
        return "Your food choices have the biggest impact. Swapping one meat-based meal for a plant-based one can make a big difference."
    else:
        return "Keep logging your activities to get more personalized tips!"
