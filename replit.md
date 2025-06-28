# Shubham Paikrao - Professional Portfolio Website

## Overview

This is a sophisticated full-stack portfolio website for Shubham Paikrao, a Computer Science Engineering student specializing in Data Science. The application features a premium dark-themed design with modern animations and interactive elements. Built with React, Express, and PostgreSQL, it showcases professional experience, skills, and projects through an elegant user interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for sophisticated animations and micro-interactions
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Development**: TSX for TypeScript execution in development

### Data Storage
- **Database**: PostgreSQL with Neon Database serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Defined in shared TypeScript files for type consistency
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Frontend Components
1. **Hero Section**: Animated landing area with floating geometric elements and parallax effects
2. **About Section**: Personal information and current journey details
3. **Skills Section**: Interactive skill showcase with progress indicators
4. **Experience Section**: Professional experience timeline with detailed descriptions
5. **Projects Section**: Portfolio projects with live demos and GitHub links
6. **Contact Section**: Form submission with validation and API integration
7. **Custom Cursor**: Enhanced cursor interactions for premium user experience
8. **Navigation**: Smooth scrolling navigation with glass morphism effects

### Backend Components
1. **Contact API**: Handles form submissions and stores messages
2. **Resume API**: Serves resume download functionality
3. **Static Serving**: Vite integration for development and production builds

### Shared Schema
- **User Management**: Basic user schema for potential future authentication
- **Contact Messages**: Schema for storing contact form submissions
- **Validation**: Zod schemas for runtime type validation

## Data Flow

1. **Client-Side Rendering**: React components render the portfolio interface
2. **Form Submission**: Contact forms validate data client-side then submit to API
3. **API Processing**: Express routes handle requests, validate with Zod, and interact with database
4. **Database Operations**: Drizzle ORM manages PostgreSQL operations
5. **Response Handling**: API responses trigger UI updates and user feedback

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Database**: Neon Database PostgreSQL, Drizzle ORM
- **Animations**: Framer Motion for sophisticated UI animations
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: TanStack Query for API state management
- **Icons**: Font Awesome and Lucide React icons

### Development Tools
- **Build Tools**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Linting**: ESBuild for production bundling
- **Development**: Replit integration with error overlays

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reload**: Vite HMR for instant frontend updates
- **Database**: Drizzle push for schema synchronization

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Environment variable configuration for production database
- **Static Serving**: Express serves built frontend assets

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development Mode**: Automatic Vite setup in development
- **Production Mode**: Static file serving with Express

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.