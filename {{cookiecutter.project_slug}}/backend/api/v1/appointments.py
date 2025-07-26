from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_appointments():
    return [{"id": 1, "patient_name": "Demo Patient", "date": "2024-01-15", "time": "10:00"}]

@router.post("/")
def create_appointment(appointment_data: dict):
    return {"id": 1, "message": "Appointment created successfully"}
