# backend/app/models/carbon_entry.py
# --- MODIFIED FILE ---
# The table is updated to store more detailed transport and food data.

from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from .user import Base
import datetime

class CarbonEntry(Base):
    __tablename__ = "carbon_entries"

    id = Column(Integer, primary_key=True, index=True)
    entry_date = Column(Date, default=datetime.date.today)
    
    # New detailed fields
    electricity_kwh = Column(Float, default=0.0)
    transport_mode = Column(String, default="none") # e.g., 'petrol_car', 'ev', 'bus'
    distance_km = Column(Float, default=0.0)
    food_choice = Column(String, default="none") # e.g., 'beef', 'chicken', 'plant_based'
    
    total_co2 = Column(Float, nullable=False)
    carbon_score = Column(Integer, nullable=False)
    
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User")