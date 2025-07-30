# backend/app/db/create_tables.py
# --- MODIFIED FILE ---
# Import the new CarbonEntry model so it gets created.

from app.db.session import engine
from app.models.user import Base as UserBase
from app.models.carbon_entry import Base as CarbonEntryBase

def init_db():
    UserBase.metadata.create_all(bind=engine)
    CarbonEntryBase.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init_db()