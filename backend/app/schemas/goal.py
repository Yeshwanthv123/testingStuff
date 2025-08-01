# backend/app/schemas/goal.py
# --- NEW FILE ---

from pydantic import BaseModel
import datetime

class GoalBase(BaseModel):
    target_co2: float

class GoalCreate(GoalBase):
    pass

class Goal(GoalBase):
    id: int
    week_start_date: datetime.date
    owner_id: int

    class Config:
        from_attributes = True