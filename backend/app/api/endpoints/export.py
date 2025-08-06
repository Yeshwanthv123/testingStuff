# backend/app/api/endpoints/export.py
# --- NEW FILE ---

from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from ...crud import export as crud_export
from ...models import user as models_user
from ...db.dependencies import get_db
from ...core.security import get_current_user

router = APIRouter()

@router.get("/csv")
def export_user_data_as_csv(
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    entries = crud_export.get_all_user_entries_for_export(db, user_id=current_user.id)
    csv_file = crud_export.generate_csv_of_entries(entries)
    
    response = StreamingResponse(iter([csv_file.getvalue()]), media_type="text/csv")
    response.headers["Content-Disposition"] = "attachment; filename=carbon_counter_export.csv"
    
    return response