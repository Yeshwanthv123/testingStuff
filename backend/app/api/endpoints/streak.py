# backend/app/api/endpoints/streak.py
# --- MODIFIED FILE ---
# Corrected the import statement to be more specific.

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ...crud import streak as crud_streak
from ...models import user as models_user
from ...schemas import streak as schemas_streak # Corrected import
from ...db.dependencies import get_db
from ...core.security import get_current_user

router = APIRouter()

@router.get("/", response_model=schemas_streak.StreakData)
def read_user_streak(
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    streak = crud_streak.get_user_streak(db, user_id=current_user.id)
    return {"current_streak": streak}