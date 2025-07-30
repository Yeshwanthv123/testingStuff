# backend/app/schemas/carbon_entry.py
# --- MODIFIED FILE ---
# Added carbon_score and updated Config

from pydantic import BaseModel
import datetime

class CarbonEntryBase(BaseModel):
    electricity_kwh: float = 0.0
    food_type: str = "none"
    driving_km: float = 0.0

class CarbonEntryCreate(CarbonEntryBase):
    pass

class CarbonEntryOut(CarbonEntryBase):
    id: int
    entry_date: datetime.date
    total_co2: float
    carbon_score: int
    owner_id: int

    class Config:
        from_attributes = True # Updated from orm_mode