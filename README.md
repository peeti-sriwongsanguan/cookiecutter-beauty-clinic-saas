# Beauty Clinic SaaS - Cookiecutter Template

A comprehensive cookiecutter template for creating AI-powered business workflow management systems specifically designed for beauty and anti-aging clinics.

## Features

- **Complete Business Workflow**: Patient lifecycle, appointments, treatments, payments
- **Visual Documentation**: Before/after photo management with AI analysis
- **Multi-Role Interfaces**: Separate portals for Staff, Doctors, and Patients
- **AI Integration**: Inventory optimization, customer outreach, revenue generation
- **Real-time Analytics**: Kafka-powered data streaming and business intelligence
- **Multilingual**: English and Thai language support
- **Cloud Ready**: GCP/AWS deployment with containerization
- **HIPAA Compliant**: Security and privacy by design

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL
- Docker (optional but recommended)

### Create Your Clinic System

```bash
# Install cookiecutter
pip install cookiecutter

# Create your project
cookiecutter https://github.com/peeti-sriwongsanguan/cookiecutter-beauty-clinic-saas

# Setup development environment
cd your-clinic-name
./scripts/setup-dev.sh

# Start the system
docker-compose up -d  # Start databases
cd backend && uvicorn main:app --reload  # Start API
cd frontend/staff-portal && npm start    # Start staff portal
```

## What You'll Get

### Backend (Python/FastAPI)
- **RESTful API** with OpenAPI documentation
- **Database Models** for patients, appointments, treatments, inventory
- **Authentication System** with role-based access control
- **Image Processing** for before/after photo management
- **AI Services** for inventory, customer insights, and scheduling
- **Real-time Events** with Kafka integration

### Frontend (React/TypeScript)
- **Staff Portal**: Patient check-in/out, scheduling, payments, inventory
- **Doctor Portal**: Medical records, photo documentation, treatment planning
- **Patient Portal**: Appointments, progress tracking, payments
- **Design System**: Medical-specific UI components and themes
- **Responsive Design**: Mobile-optimized for clinical tablets

### Infrastructure
- **Docker Compose** for local development
- **Terraform** templates for GCP/AWS deployment
- **Kubernetes** manifests for production scaling
- **Monitoring** with Prometheus and Grafana

## Target Industries

- Beauty and Anti-aging Clinics
- Dermatology Practices  
- Cosmetic Surgery Centers
- Med Spas and Wellness Centers
- Aesthetic Treatment Facilities

## Technology Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PostgreSQL** - Primary database
- **Redis** - Caching and sessions
- **Kafka** - Real-time data streaming
- **SQLAlchemy** - ORM with async support
- **Alembic** - Database migrations

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Query** - Data fetching and caching
- **React Hook Form** - Form management

### AI/ML
- **scikit-learn** - Machine learning
- **OpenCV** - Image processing
- **TensorFlow** - Deep learning (optional)
- **Pandas** - Data analysis

### DevOps
- **Docker** - Containerization
- **Terraform** - Infrastructure as code
- **GitHub Actions** - CI/CD
- **Prometheus** - Monitoring

## Visual Documentation Features

### Medical Photography
- **Standardized Photo Capture** with pose guidance
- **Before/After Comparison** tools
- **Progress Timeline** visualization
- **AI-powered Image Analysis** for treatment assessment

### Anatomical Markup
- **Interactive Canvas** for treatment area marking
- **Face Templates** (front, profile, 3/4 view)
- **Annotation Tools** with provider notes
- **Measurement Tools** for tracking changes

## Security & Compliance

- **HIPAA Compliance** - Patient data encryption and audit trails
- **GDPR Ready** - Data portability and deletion rights
- **Role-based Access** - Granular permissions system
- **Secure Image Storage** - Encrypted medical photos
- **Audit Logging** - Complete access tracking

## Internationalization

- **English** (primary)
- **Thai** (secondary)
- **Extensible** - Easy to add new languages
- **Cultural Adaptation** - Localized date/time formats

## Business Model Support

### Free Core
- Basic clinic management
- Standard reporting
- Open source components

### Premium AI Features
- Advanced analytics
- Predictive insights
- Automated marketing

### Enterprise
- Multi-location support
- Custom integrations
- White-labeling

## Sample Data

The template includes realistic sample data:
- **50+ Sample Patients** with treatment histories
- **Medical Staff Profiles** with schedules and specializations  
- **Treatment Catalog** with pricing and procedures
- **Appointment History** with various statuses
- **Before/After Photos** for testing visual features

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

```bash
git clone https://github.com/peeti-sriwongsanguan/cookiecutter-beauty-clinic-saas.git
cd cookiecutter-beauty-clinic-saas
pip install cookiecutter
cookiecutter . --no-input  # Test template generation
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built for the beauty and wellness industry
- Inspired by real clinic workflow challenges
- Designed with healthcare compliance in mind

## Support

- **Email**: peeti@pharma-techsolutions.com
- **Issues**: [GitHub Issues](https://github.com/peeti-sriwongsanguan/cookiecutter-beauty-clinic-saas/issues)
- **Discussions**: [GitHub Discussions](https://github.com/peeti-sriwongsanguan/cookiecutter-beauty-clinic-saas/discussions)

---

**If this template helps your clinic, please give it a star!**

---

# File: {{cookiecutter.project_slug}}/README.md
# {{cookiecutter.project_name}}

{{cookiecutter.description}} for {{cookiecutter.clinic_name}}.

## System Overview

This system provides comprehensive workflow management for beauty and anti-aging clinics with three main interfaces:

### Staff Portal (Port 3000)
- Patient check-in/check-out
- Appointment scheduling
- Payment processing
- Inventory management
- Insurance handling

### Doctor Portal (Port 3001)  
- Patient medical records
- Before/after photo documentation
- Treatment planning
- Progress analysis
- Performance analytics

### Patient Portal (Port 3002)
- Online appointment booking
- Treatment progress tracking
- Payment history
- Educational resources

## Quick Start

### Prerequisites
- Python {{cookiecutter.python_version}}+
- Node.js 18+
- PostgreSQL
- Docker (recommended)

### Setup

```bash
# 1. Setup development environment
./scripts/setup-dev.sh

# 2. Start database services
docker-compose up -d

# 3. Start backend API
cd backend
source ../venv/bin/activate
uvicorn main:app --reload

# 4. Start frontend portals (in separate terminals)
cd frontend/staff-portal && npm start      # http://localhost:3000
cd frontend/doctor-portal && npm start     # http://localhost:3001  
cd frontend/patient-portal && npm start    # http://localhost:3002
```

### Default Login Credentials

```
Admin: admin@{{cookiecutter.clinic_name.lower().replace(' ', '')}}.com / admin123
Doctor: doctor@{{cookiecutter.clinic_name.lower().replace(' ', '')}}.com / doctor123
Staff: staff@{{cookiecutter.clinic_name.lower().replace(' ', '')}}.com / staff123
```

## Project Structure

```
{{cookiecutter.project_slug}}/
├── backend/                 # Python FastAPI backend
├── frontend/               # React frontends
│   ├── shared/            # Shared components
│   ├── design-system/     # UI design system
│   ├── staff-portal/      # Staff interface
│   ├── doctor-portal/     # Doctor interface
│   └── patient-portal/    # Patient interface
├── data/                  # Database and sample data
├── infrastructure/        # Deployment configurations
├── docs/                  # Documentation
└── scripts/              # Development scripts
```

## Development

### Backend Development

```bash
cd backend
source ../venv/bin/activate

# Run tests
pytest

# Run with auto-reload
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Database migrations
alembic upgrade head
alembic revision --autogenerate -m "Description"
```

### Frontend Development

```bash
cd frontend/staff-portal  # or doctor-portal, patient-portal

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Sample Data

Load sample data for development:

```bash
# Generate sample patients, appointments, etc.
python data/sample/generators/bulk_import.py

# Or generate specific data
python data/sample/generators/generate_patients.py --count 50
python data/sample/generators/generate_appointments.py --days 30
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/{{cookiecutter.project_slug.replace('-', '_')}}

# Security  
SECRET_KEY=your-secret-key

# Cloud Storage ({{cookiecutter.deployment_platform}})
{% if cookiecutter.deployment_platform == 'gcp' -%}
GCP_PROJECT_ID={{cookiecutter.project_slug}}
GCP_STORAGE_BUCKET={{cookiecutter.project_slug}}-storage
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json
{%- elif cookiecutter.deployment_platform == 'aws' -%}
AWS_REGION=us-west-2
AWS_S3_BUCKET={{cookiecutter.project_slug}}-storage
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
{%- endif %}

# Features
ENABLE_AI_FEATURES={{cookiecutter.use_ai_features}}
ENABLE_IMAGE_PROCESSING={{cookiecutter.use_image_processing}}
ENABLE_REAL_TIME={{cookiecutter.use_real_time}}
```

## Deployment

### Development
```bash
docker-compose up
```

### Production ({{cookiecutter.deployment_platform|upper}})
```bash
cd infrastructure/{{cookiecutter.deployment_platform}}/environments/prod
terraform init
terraform plan
terraform apply
```

## Documentation

- [API Documentation](docs/api/) - Backend API reference
- [User Guides](docs/user-guides/) - How to use each portal
- [Development Guide](docs/development/) - Development setup and guidelines
- [Deployment Guide](docs/deployment/) - Production deployment instructions

## Testing

```bash
# Backend tests
cd backend && pytest

# Frontend tests  
cd frontend/staff-portal && npm test
cd frontend/doctor-portal && npm test
cd frontend/patient-portal && npm test

# Integration tests
python -m pytest tests/integration/

# Load testing
cd scripts && python load_test.py
```

## Security

- **HIPAA Compliant**: Patient data encryption and audit trails
- **Role-based Access**: Granular permissions for staff, doctors, patients
- **Secure Image Storage**: Encrypted medical photos with access controls
- **Audit Logging**: Complete system access tracking

## Localization

Primary: {{cookiecutter.primary_language|upper}}
Secondary: {{cookiecutter.secondary_language|upper}}

```bash
# Add new translations
cd locales/{{cookiecutter.secondary_language}}
# Edit JSON files for each portal
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**{{cookiecutter.author_name}}**
- Email: {{cookiecutter.author_email}}
- Clinic: {{cookiecutter.clinic_name}}

## Support

For technical support or questions:
- Email: {{cookiecutter.author_email}}
- Issues: Create a GitHub issue
- Documentation: Check the docs/ folder

---

**Built with care for {{cookiecutter.clinic_name}}**
