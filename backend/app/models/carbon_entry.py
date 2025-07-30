# backend/app/models/carbon_entry.py
# --- MODIFIED FILE ---
# Added carbon_score column

from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from .user import Base
import datetime

class CarbonEntry(Base):
    __tablename__ = "carbon_entries"

    id = Column(Integer, primary_key=True, index=True)
    entry_date = Column(Date, default=datetime.date.today)
    
    electricity_kwh = Column(Float, default=0.0)
    food_type = Column(String, default="none") # e.g., 'none', 'veg', 'meat'
    driving_km = Column(Float, default=0.0)
    
    total_co2 = Column(Float, nullable=False)
    carbon_score = Column(Integer, nullable=False) # New column
    
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User")
