# backend/app/api/endpoints/goals.py
# --- MODIFIED FILE ---
# Corrected the import statements to be more specific.

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Optional

# Corrected, more specific imports
from ...crud import goal as crud_goal
from ...models import user as models_user
from ...schemas import goal as schemas_goal
from ...db.dependencies import get_db
from ...core.security import get_current_user

router = APIRouter()

@router.get("/", response_model=Optional[schemas_goal.Goal])
def read_current_week_goal(
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    goal = crud_goal.get_current_week_goal(db, user_id=current_user.id)
    return goal

@router.post("/", response_model=schemas_goal.Goal)
def set_current_week_goal(
    goal: schemas_goal.GoalCreate,
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    return crud_goal.create_or_update_week_goal(db=db, goal=goal, user_id=current_user.id)
