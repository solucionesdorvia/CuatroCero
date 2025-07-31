# Cuatro Cero - Futsal Club Management Platform

## Overview

Cuatro Cero is a comprehensive full-stack web application designed for managing futsal clubs. The platform includes features for club management, player administration, training session planning, match management, product sales (templates and eBooks), and subscription-based access control. The application is built with a modern React frontend and Express.js backend, using PostgreSQL as the primary database.

## User Preferences

Preferred communication style: Simple, everyday language.
Logo requirements: Official Cuatro Cero logo with angular brackets (green) and "GESTIÓN DE EQUIPO" subtitle exactly as provided in the design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Design System**: Custom dark theme with official Cuatro Cero branding
- **Logo Component**: SVG-based CuatroLogo component with official design

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Authentication**: Passport.js with local strategy and session management
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL-based session store

### Database Architecture
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Authentication & Authorization
- **Strategy**: Session-based authentication using Passport.js
- **Password Security**: Scrypt hashing with salt for secure password storage
- **Role-based Access**: Three user roles (TÉCNICO, CUERPO_TÉCNICO, INSTITUCIONAL)
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Database Schema
The application uses a comprehensive schema with the following main entities:
- **Users**: Authentication, profile information, and role assignment
- **Clubs**: Club information with category management
- **Players**: Player profiles with position, stats, and club association
- **Exercises**: Training exercise library with difficulty and category classification
- **Training Sessions**: Planned training sessions with exercise associations
- **Matches**: Match management with live scoring and event tracking
- **Products**: Digital products (templates and eBooks) for the store
- **Subscriptions**: Plan-based access control with feature limitations

### API Structure
- **RESTful Design**: Standard HTTP methods and status codes
- **Authentication Middleware**: Route protection based on user authentication and roles
- **Data Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling with appropriate HTTP status codes

## Data Flow

### User Registration & Authentication
1. User registers with email/password and role selection
2. Email verification code generated (simulated via console)
3. User logs in with credentials
4. Session established with role-based permissions
5. Dashboard access granted based on subscription status

### Club Management Flow
1. Authenticated users create clubs with basic information
2. Club categories (divisions) are established
3. Players are added to specific categories
4. Training exercises are created and categorized
5. Training sessions are planned using available exercises
6. Matches are scheduled and managed with live scoring

### E-commerce Flow
1. Public store displays products (templates and eBooks)
2. Users add products to cart (requires authentication)
3. Cart management through session storage
4. Simulated purchase process with WhatsApp integration

### Subscription Management
1. Public plan comparison page
2. Plan selection triggers WhatsApp contact simulation
3. Manual subscription activation (admin process)
4. Feature access control based on active subscription

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, Lucide React icons
- **Development**: Vite, TypeScript, Tailwind CSS
- **State Management**: TanStack Query for API state
- **Validation**: Zod for schema validation

### Backend Dependencies
- **Core**: Express.js, TypeScript, Node.js
- **Database**: Drizzle ORM, PostgreSQL client (@neondatabase/serverless)
- **Authentication**: Passport.js with local strategy
- **Session**: Express-session with PostgreSQL store
- **Security**: Crypto module for password hashing
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Database
- **PostgreSQL**: Primary database (Neon serverless compatible)
- **Connection**: WebSocket support for serverless environments
- **Session Storage**: PostgreSQL-based session persistence

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx for TypeScript execution with live reload
- **Database**: Environment variable-based connection string
- **Session**: In-memory development session store

### Production Build Process
1. **Frontend Build**: Vite builds optimized static assets to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Environment**: Production environment variables for database and session secret

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **SESSION_SECRET**: Secure session signing key (required)
- **NODE_ENV**: Environment flag for development/production behavior

### File Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend application
├── shared/          # Shared TypeScript schemas and types
├── dist/            # Production build output
└── migrations/      # Database migration files
```

The application follows a monorepo structure with clear separation between frontend, backend, and shared code, enabling efficient development and deployment workflows.