# backend/app/schemas/suggestion.py
# --- NEW FILE ---

from pydantic import BaseModel
from typing import Optional

class Suggestion(BaseModel):
    suggestion: Optional[str] = "Log some entries to get your first eco-suggestion!"