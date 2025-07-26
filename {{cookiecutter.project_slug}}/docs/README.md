# {{cookiecutter.project_name}} Documentation

## Quick Links

- [API Documentation](api/) - Backend API reference
- [User Guides](user-guides/) - How to use each portal
- [Development Guide](development/) - Setup and development guidelines

## Architecture Overview

This system consists of:

- **Backend API** (FastAPI) - Port 8000
- **Staff Portal** (React) - Port 3000  
- **Doctor Portal** (React) - Port 3001
- **Patient Portal** (React) - Port 3002

## Configuration

- **Clinic**: {{cookiecutter.clinic_name}}
- **Version**: {{cookiecutter.version}}
- **Language**: {{cookiecutter.primary_language}} (primary), {{cookiecutter.secondary_language}} (secondary)

## Getting Started

1. Run setup script: `./scripts/setup-dev.sh`
2. Start all services
3. Access the portals via the URLs above

For detailed setup instructions, see the Development Guide.
