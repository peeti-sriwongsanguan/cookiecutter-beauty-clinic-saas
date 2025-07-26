from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.core.config import settings
from backend.api.v1 import auth, patients, appointments

app = FastAPI(
    title="{{cookiecutter.project_name}} API",
    description="{{cookiecutter.description}}",
    version="{{cookiecutter.version}}"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/v1/auth", tags=["authentication"])
app.include_router(patients.router, prefix="/api/v1/patients", tags=["patients"])
app.include_router(appointments.router, prefix="/api/v1/appointments", tags=["appointments"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to {{cookiecutter.project_name}} API",
        "clinic": "{{cookiecutter.clinic_name}}",
        "version": "{{cookiecutter.version}}"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "{{cookiecutter.project_name}}"}
