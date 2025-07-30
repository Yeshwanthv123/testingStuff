from app.db.session import SessionLocal
from app.models.user import User

def add_test_user():
    # Create a new database session
    db = SessionLocal()
    try:
        # Check if the user already exists
        test_user = db.query(User).filter(User.email == "test@example.com").first()
        if not test_user:
            # Create a new user object
            new_user = User(
                email="test@example.com",
                provider="test",
                provider_id="12345"
            )
            # Add the new user to the session
            db.add(new_user)
            # Commit the transaction to the database
            db.commit()
            print("Test user added successfully!")
        else:
            print("Test user already exists.")
    finally:
        # Close the session
        db.close()

if __name__ == "__main__":
    add_test_user()
