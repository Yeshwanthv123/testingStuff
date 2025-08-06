# backend/app/api/endpoints/suggestions.py
# --- MODIFIED FILE ---
# Corrected the import statements to be specific.

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ...crud import suggestion as crud_suggestion
from ...models import user as models_user
from ...schemas import suggestion as schemas_suggestion
from ...db.dependencies import get_db
from ...core.security import get_current_user

router = APIRouter()

@router.get("/", response_model=schemas_suggestion.Suggestion)
def get_suggestion(
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    suggestion_text = crud_suggestion.generate_suggestion(db, user_id=current_user.id)
    return {"suggestion": suggestion_text}