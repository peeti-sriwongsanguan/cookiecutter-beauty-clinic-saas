from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
def login(credentials: dict):
    # TODO: Implement authentication
    return {"access_token": "demo-token", "token_type": "bearer"}

@router.post("/logout")
def logout():
    return {"message": "Logged out successfully"}
