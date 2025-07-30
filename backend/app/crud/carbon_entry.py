# backend/app/crud/carbon_entry.py
# --- MODIFIED FILE ---
# Corrected the create_carbon_entry function to explicitly pass all values.

from sqlalchemy.orm import Session
from ..models.carbon_entry import CarbonEntry
from ..schemas.carbon_entry import CarbonEntryCreate

# Emission factors (in kg CO2e per unit)
EMISSION_FACTORS = {
    "electricity_kwh": 0.85, 
    "driving_km": 0.21,      
    "food_type": {
        "none": 0.0,
        "veg": 2.0,
        "meat": 7.0,
    }
}
# Daily target in kg CO2e for score calculation
DAILY_TARGET_CO2 = 20.0

def calculate_emissions(entry: CarbonEntryCreate) -> tuple[float, int]:
    electricity_co2 = entry.electricity_kwh * EMISSION_FACTORS["electricity_kwh"]
    driving_co2 = entry.driving_km * EMISSION_FACTORS["driving_km"]
    food_co2 = EMISSION_FACTORS["food_type"].get(entry.food_type, 0.0)
    
    total_co2 = electricity_co2 + driving_co2 + food_co2
    
    score_percentage = (total_co2 / DAILY_TARGET_CO2) * 100
    carbon_score = max(0, 100 - int(score_percentage))
    
    return round(total_co2, 2), carbon_score

def create_carbon_entry(db: Session, entry: CarbonEntryCreate, user_id: int):
    total_co2, carbon_score = calculate_emissions(entry)
    # FIX: Explicitly create the CarbonEntry object instead of using .dict()
    db_entry = CarbonEntry(
        electricity_kwh=entry.electricity_kwh,
        food_type=entry.food_type,
        driving_km=entry.driving_km,
        total_co2=total_co2, 
        carbon_score=carbon_score,
        owner_id=user_id
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def get_user_entries(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(CarbonEntry).filter(CarbonEntry.owner_id == user_id).order_by(CarbonEntry.entry_date.desc(), CarbonEntry.id.desc()).offset(skip).limit(limit).all()
