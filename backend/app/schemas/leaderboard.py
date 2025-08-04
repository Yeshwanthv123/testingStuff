# backend/app/schemas/leaderboard.py
# --- NEW FILE ---

from pydantic import BaseModel

class LeaderboardEntry(BaseModel):
    rank: int
    username: str
    weekly_avg_score: int

    class Config:
        from_attributes = True