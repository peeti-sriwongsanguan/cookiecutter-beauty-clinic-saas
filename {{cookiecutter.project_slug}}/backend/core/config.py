from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Application
    app_name: str = "{{cookiecutter.project_name}}"
    debug: bool = True
    version: str = "{{cookiecutter.version}}"
    clinic_name: str = "{{cookiecutter.clinic_name}}"
    
    # Database
    database_url: str = "postgresql://postgres:postgres@localhost:5432/{{cookiecutter.project_slug.replace('-', '_')}}"
    
    # Security
    secret_key: str = "your-secret-key-change-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    # Redis
    redis_url: str = "redis://localhost:6379/0"
    
    class Config:
        env_file = ".env"

settings = Settings()
