# CryptoTrend Alpha - Automated Crypto Trading Platform

A sophisticated cryptocurrency tracking and analysis web application that provides comprehensive trading insights with advanced performance analytics and user-centric design.

## Features

- React.js frontend with interactive data visualization
- Real-time crypto market performance tracking
- Advanced algorithmic trading signal generation
- Responsive design with detailed performance metrics
- Comprehensive strategy analysis and comparison tools
- Dark/light theme support
- Multi-language support (English, Hindi, Punjabi)
- Location-based content personalization

## Technology Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: React Context API, TanStack Query

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd cryptotrend-alpha
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   ```

4. Set up the database:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Deploying to Vercel

This project is configured for easy deployment to Vercel:

1. Fork this repository to your GitHub account
2. Create a new project on Vercel and connect your GitHub repository
3. Configure the following environment variables in Vercel:
   - `DATABASE_URL`: Connection string to your PostgreSQL database
4. Deploy!

### Database Configuration

For production deployment:
1. Set up a PostgreSQL database instance (we recommend [Neon](https://neon.tech) or [Supabase](https://supabase.com))
2. Add the database connection string to Vercel's environment variables

## Project Structure

- `client/`: Frontend React application
  - `src/components/`: UI components
  - `src/contexts/`: React context providers
  - `src/pages/`: Page components
- `server/`: Backend Express application
  - `routes.ts`: API routes
  - `storage.ts`: Data access layer
  - `index.ts`: Server entry point
- `shared/`: Shared code between frontend and backend
  - `schema.ts`: Database schema and types

## License

This project is licensed under the MIT License - see the LICENSE file for details