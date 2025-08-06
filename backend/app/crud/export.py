# backend/app/crud/export.py
# --- NEW FILE ---

from sqlalchemy.orm import Session
from ..models.carbon_entry import CarbonEntry
import io
import csv

def get_all_user_entries_for_export(db: Session, user_id: int):
    """Fetches all carbon entries for a specific user."""
    return db.query(CarbonEntry).filter(CarbonEntry.owner_id == user_id).order_by(CarbonEntry.entry_date.asc()).all()

def generate_csv_of_entries(entries: list[CarbonEntry]) -> io.StringIO:
    """Generates a CSV file in memory from a list of entries."""
    output = io.StringIO()
    writer = csv.writer(output)
    
    header = [
        "entry_date", "electricity_kwh", "transport_mode", 
        "distance_km", "food_choice", "total_co2", "carbon_score"
    ]
    writer.writerow(header)
    
    for entry in entries:
        writer.writerow([
            entry.entry_date,
            entry.electricity_kwh,
            entry.transport_mode,
            entry.distance_km,
            entry.food_choice,
            entry.total_co2,
            entry.carbon_score
        ])
    
    output.seek(0)
    return output