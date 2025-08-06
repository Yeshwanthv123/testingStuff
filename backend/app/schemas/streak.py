# backend/app/schemas/streak.py
# --- NEW FILE ---

from pydantic import BaseModel

class StreakData(BaseModel):
    current_streak: int