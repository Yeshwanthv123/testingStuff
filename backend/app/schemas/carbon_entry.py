# backend/app/schemas/carbon_entry.py
# --- MODIFIED FILE ---
# Added an optional entry_date to allow the client to specify the date.

from pydantic import BaseModel
import datetime
from typing import Optional

class CarbonEntryBase(BaseModel):
    electricity_kwh: float = 0.0
    food_type: str = "none"
    driving_km: float = 0.0

class CarbonEntryCreate(CarbonEntryBase):
    entry_date: Optional[datetime.date] = None # New optional field

class CarbonEntryOut(CarbonEntryBase):
    id: int
    entry_date: datetime.date
    total_co2: float
    carbon_score: int
    owner_id: int

    class Config:
        from_attributes = True