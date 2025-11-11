# Replit.md

## Overview

This is a full-stack web application for a web accessibility service called "Giga Web Accessibility". The application provides automated accessibility auditing, compliance monitoring, and reporting tools for websites, with specific integrations for WordPress and Shopify platforms. The UI features a modern dark theme design inspired by contemporary SaaS platforms with blue and cyan accent colors.

## Recent Changes (Latest)

**January 30, 2025**: Applied deployment fixes
- ✅ Added PostgreSQL database connection with DATABASE_URL environment variable
- ✅ Implemented session management with SESSION_SECRET environment variable
- ✅ Created sessions table for PostgreSQL session storage using connect-pg-simple
- ✅ Added comprehensive environment variable validation with clear error messages
- ✅ Set up production-ready session configuration with security settings
- ✅ Created production startup script with automatic database migrations
- ✅ Fixed all deployment configuration issues identified in the failed deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using express-session and connect-pg-simple
- **Environment Variables**: Comprehensive validation for DATABASE_URL and SESSION_SECRET

### Project Structure
- `/frontend/` - React application (Vite + React Query)
- `/backend/` - Express.js API server
- `/shared/` - Shared TypeScript types and schemas
- `/migrations/` - Database migration files

## Key Components

### Frontend Components
- **Navigation**: Fixed header with responsive mobile menu featuring modern dark theme
- **Pages**: Home, Setup Guide, Documentation, and 404 pages with cohesive dark styling
- **UI Library**: Complete shadcn/ui component set with custom dark theme styling
- **Design System**: Modern dark theme with blue/cyan gradients, glass morphism effects, and enhanced typography
- **Accessibility Focus**: WCAG-compliant design with high contrast ratios and semantic markup

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route System**: Modular Express route registration
- **Development Tools**: Vite integration for hot reload in development

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Sessions Table**: PostgreSQL session storage for express-session with automatic expiration
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Authentication**: Session-based authentication using PostgreSQL storage
3. **Data Validation**: Incoming data validated using Drizzle-Zod schemas
4. **Database Operations**: Drizzle ORM handles all database interactions
5. **Response Handling**: TanStack Query manages client-side caching and state

## External Dependencies

### Production Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI components
- **Icons**: Lucide React icons, React Icons for brand logos
- **Utilities**: date-fns for date handling, clsx for conditional classes

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server with hot module replacement
- **PostCSS**: CSS processing with Tailwind CSS
- **ESBuild**: Production build bundling for backend

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `/dist/public/`
2. **Backend**: ESBuild bundles Express server to `/dist/index.js`
3. **Database**: Drizzle migrations deployed via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: Requires DATABASE_URL environment variable

### Key Scripts
- `npm run dev` - Development with hot reload
- `npm run build` - Production build for both frontend and backend
- `npm run start` - Production server startup
- `npm run db:push` - Deploy database schema changes

## Notable Architectural Decisions

### Monorepo Structure
- **Problem**: Managing frontend, backend, and shared code
- **Solution**: Single repository with clear separation via folders
- **Benefits**: Shared types, simplified deployment, easier development

### Storage Abstraction
- **Problem**: Flexibility for different storage backends
- **Solution**: IStorage interface with pluggable implementations
- **Current**: In-memory storage for development
- **Future**: Easy migration to PostgreSQL implementation

### Component Library Choice
- **Problem**: Need for accessible, customizable UI components
- **Solution**: shadcn/ui built on Radix UI primitives
- **Benefits**: Full accessibility support, TypeScript integration, customizable theming

### Database Technology
- **Problem**: Need for scalable, serverless database solution
- **Solution**: Neon Database with Drizzle ORM
- **Benefits**: Serverless scaling, PostgreSQL compatibility, type-safe queries
