from app.db.session import engine
from app.models.user import Base as UserBase
from app.models.carbon_entry import Base as CarbonEntryBase
from app.models.goal import Base as GoalBase # Add this import

def init_db():
    UserBase.metadata.create_all(bind=engine)
    CarbonEntryBase.metadata.create_all(bind=engine)
    GoalBase.metadata.create_all(bind=engine) # Add this line

if __name__ == "__main__":
    init_db()
