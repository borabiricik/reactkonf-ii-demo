# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5 demo application for a React conference presentation titled "Why you should pick Next.js for your Next startup?". The project demonstrates why companies choose Next.js for building MVPs through multiple concept implementations in a single demo application.

### Demo Features to Implement
- **Payment Integration**: Using Polar.sh for checkout/payment processing
- **Authentication**: Using Better-Auth for user authentication
- **AI Integration**: Using Vercel AI SDK for AI capabilities

### Code Conventions
- **Language**: All code, including variable names, comments, and documentation in code files must be written in English
- **Naming**: Use descriptive English names for all variables, functions, components, and files

## Commands

### Package Manager
- **Bun** is used as the package manager for this project
- `bun install` - Install dependencies
- `bun add [package]` - Add new dependencies

### Development
- `bun run dev` - Start development server with Turbopack at http://localhost:3000
- `bun run build` - Build production bundle with Turbopack
- `bun run start` - Start production server

### Code Quality
- `bun run lint` - Run Biome linter to check code quality
- `bun run format` - Auto-format code with Biome

## Architecture

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Main entry page component
  - `globals.css` - Global Tailwind CSS styles
- `/public/` - Static assets (SVG icons)

### Key Configuration
- **TypeScript**: Strict mode enabled with path alias `@/*` mapping to `./src/*`
- **Biome**: Linter and formatter with Next.js and React recommended rules
- **Tailwind CSS v4**: Using the new @tailwindcss/postcss configuration
- **Turbopack**: Fast bundler enabled for both dev and build

### Tech Stack
- Next.js 15.5 with App Router
- React 19.1.0
- TypeScript with strict mode
- Tailwind CSS v4
- Biome for linting and formatting (replaces ESLint/Prettier)