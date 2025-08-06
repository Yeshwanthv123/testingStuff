# backend/app/schemas/carbon_entry.py
# --- MODIFIED FILE ---
# Pydantic schemas are updated to match the new model.

from pydantic import BaseModel
import datetime

class CarbonEntryBase(BaseModel):
    electricity_kwh: float = 0.0
    transport_mode: str = "none"
    distance_km: float = 0.0
    food_choice: str = "none"

class CarbonEntryCreate(CarbonEntryBase):
    entry_date: datetime.date

class CarbonEntryOut(CarbonEntryBase):
    id: int
    entry_date: datetime.date
    total_co2: float
    carbon_score: int
    owner_id: int

    class Config:
        from_attributes = True