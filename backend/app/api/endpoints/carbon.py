# backend/app/api/endpoints/carbon.py
# --- MODIFIED FILE ---
# We are making the imports more specific to avoid errors.

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from ...crud import carbon_entry as crud_carbon
from ...models import user as models_user
from ...schemas import carbon_entry as schemas_carbon
from ...db.dependencies import get_db
from ...core.security import get_current_user

router = APIRouter()

@router.post("/", response_model=schemas_carbon.CarbonEntryOut)
def create_entry(
    entry: schemas_carbon.CarbonEntryCreate,
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    return crud_carbon.create_carbon_entry(db=db, entry=entry, user_id=current_user.id)

@router.get("/", response_model=List[schemas_carbon.CarbonEntryOut])
def read_entries(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    entries = crud_carbon.get_user_entries(db, user_id=current_user.id, skip=skip, limit=limit)
    return entries