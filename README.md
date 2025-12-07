# Recipe Bookkeeper

Recipe Bookkeeper is a web-based application designed to help home cooks, chefs, and food bloggers manage their recipe collections efficiently. It provides a platform for tracking recipe variations and conversions, allowing users to explore, create, and share recipes easily. With Recipe Bookkeeper, users can organize their recipe library by categories, tags, and cooking methods, making it simple to find specific recipes or discover new ones. The application also includes features like automatic ingredient measurement conversion, meal planning, and grocery list generation. By streamlining the recipe management process, Recipe Bookkeeper aims to save time and reduce stress for home cooks and food enthusiasts alike.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── layout/           # Header, Footer
│   ├── tool/             # Tool components
│   └── ui/               # Reusable UI components
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Deployment

This project is ready for deployment on Vercel or Netlify.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT License
