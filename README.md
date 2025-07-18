# GDSC Next.js Project

A modern Next.js application built with TypeScript and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 15.4.1 (App Router)
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS v4.1.11
- **Package Manager**: pnpm
- **Font**: Inter (Google Fonts)
- **React**: React 19.1.0

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

### Other Commands

- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles with Tailwind directives
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page
├── components/         # Reusable components (create as needed)
└── lib/               # Utility functions (create as needed)
```

## Features

- ✅ Next.js 15.4.1 with App Router
- ✅ React 19.1.0 with latest features
- ✅ TypeScript 5.8.3 for type safety
- ✅ Tailwind CSS v4.1.11 for styling
- ✅ ESLint for code quality
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Modern UI components
- ✅ Optimized fonts (Inter)

## Configuration

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. 