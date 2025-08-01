# backend/app/models/goal.py
# --- NEW FILE ---

from sqlalchemy import Column, Integer, Float, Date, ForeignKey
from .user import Base
import datetime

class WeeklyGoal(Base):
    __tablename__ = "weekly_goals"

    id = Column(Integer, primary_key=True, index=True)
    week_start_date = Column(Date, nullable=False)
    target_co2 = Column(Float, nullable=False)
    owner_id = Column(Integer, ForeignKey("users.id"))