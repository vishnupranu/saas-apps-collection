# data-visualization

Data visualization dashboard tool

## Features
- User authentication and authorization
- RESTful API architecture
- MongoDB database integration
- Redis caching
- Stripe payment integration
- Docker containerization
- Production-ready setup

## Quick Start

### Using Docker (Recommended)
```bash
docker-compose up -d
```

### Manual Setup
```bash
npm install
npm run dev
```

## API Endpoints

- GET /health - Health check
- GET /api/v1 - API information

## Environment Variables

Copy `.env.example` to `.env` and configure:

- MONGODB_URI
- JWT_SECRET
- STRIPE_SECRET_KEY
- Other service-specific variables

## Tech Stack

- Node.js + Express
- MongoDB
- Redis
- Docker
- Stripe

## License

MIT
