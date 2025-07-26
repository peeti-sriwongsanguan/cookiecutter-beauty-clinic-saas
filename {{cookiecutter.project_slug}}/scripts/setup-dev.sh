#!/bin/bash
# Development Environment Setup for {{cookiecutter.project_name}}

set -e

echo "Setting up {{cookiecutter.project_name}} Development Environment"
echo "Clinic: {{cookiecutter.clinic_name}}"

# Check Python version
python_version=$(python3 --version | cut -d ' ' -f 2 | cut -d '.' -f 1,2)
required_version="{{cookiecutter.python_version}}"

if [ "$(printf '%s\n' "$required_version" "$python_version" | sort -V | head -n1)" != "$required_version" ]; then
    echo "ERROR: Python {{cookiecutter.python_version}}+ is required. Found: Python $python_version"
    exit 1
fi

echo "Python version check passed"

# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements/development.txt

# Setup environment variables
if [ ! -f .env ]; then
    echo "Creating environment file..."
    cp .env.example .env
    echo "WARNING: Please update .env file with your configuration"
fi

# Install Node.js dependencies
echo "Setting up frontend dependencies..."
cd frontend/shared && npm install && cd ../..
cd frontend/staff-portal && npm install && cd ../..
cd frontend/doctor-portal && npm install && cd ../..
cd frontend/patient-portal && npm install && cd ../..

# Setup Docker services
if command -v docker-compose &> /dev/null; then
    echo "Starting Docker services..."
    docker-compose up -d
    echo "Docker services started"
fi

# Setup database
echo "Setting up database..."
sleep 3
cd backend
python -c "
from core.database import engine, Base
from models.patient import Patient
Base.metadata.create_all(bind=engine)
print('Database tables created')
"
cd ..

echo ""
echo "Setup complete!"
echo ""
echo "To start development:"
echo "  1. Activate virtual environment: source venv/bin/activate"
echo "  2. Start backend: cd backend && uvicorn main:app --reload"
echo "  3. Start frontend portals (in separate terminals):"
echo "     - Staff: cd frontend/staff-portal && npm start"
echo "     - Doctor: cd frontend/doctor-portal && npm start"  
echo "     - Patient: cd frontend/patient-portal && npm start"
echo ""
echo "Access URLs:"
echo "  - API Documentation: http://localhost:8000/docs"
echo "  - Staff Portal: http://localhost:3000"
echo "  - Doctor Portal: http://localhost:3001"
echo "  - Patient Portal: http://localhost:3002"
