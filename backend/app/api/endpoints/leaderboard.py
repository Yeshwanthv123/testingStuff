# backend/app/api/endpoints/leaderboard.py
# --- NEW FILE ---

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from ...crud import leaderboard as crud_leaderboard
from ...schemas import leaderboard as schemas_leaderboard
from ...db.dependencies import get_db

router = APIRouter()

@router.get("/", response_model=List[schemas_leaderboard.LeaderboardEntry])
def read_leaderboard(db: Session = Depends(get_db)):
    leaderboard_data = crud_leaderboard.get_leaderboard_data(db)
    return leaderboard_data