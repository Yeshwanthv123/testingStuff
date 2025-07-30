# backend/app/db/dependencies.py
# --- NEW FILE ---
# We are creating this file to manage our database dependency.

from .session import SessionLocal

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()