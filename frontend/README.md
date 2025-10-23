# Baseball Platform - Frontend

This is the frontend web application for the Baseball Data Platform, built with Next.js 15 and Tailwind CSS.

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Run production server
npm run start
```

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js pages (App Router)
│   │   ├── page.tsx      # Home dashboard
│   │   ├── roster/       # Player roster
│   │   ├── team-info/    # Team information
│   │   ├── leaderboards/ # Performance rankings
│   │   ├── player-profilestats/ # Player statistics
│   │   ├── pitchers/[id] # Individual pitcher profiles
│   │   ├── hitters/[id]  # Individual hitter profiles
│   │   ├── upload/       # CSV upload page
│   │   └── settings/     # User settings
│   │
│   └── components/       # Reusable components
│       ├── Sidebar.tsx   # Navigation sidebar
│       ├── HomePage.tsx  # Home dashboard component
│       ├── Roster.tsx    # Roster display
│       ├── PlayerCard.tsx # Individual player card
│       └── ...           # Other components
│
├── public/               # Static files
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Pages Overview

### Home (`/`)
Dashboard with team statistics, top performers, upcoming games, and recent activity.

### Roster (`/roster`)
Grid view of all team players with their positions and basic stats.

### Team Info (`/team-info`)
Team statistics, coaching staff, upcoming schedule, and contact information.

### Leaderboards (`/leaderboards`)
Performance rankings with filtering options.

### Player Stats (`/player-profilestats`)
Overview of player statistics across the team.

### Upload (`/upload`)
Interface for uploading TrackMan CSV files.

### Settings (`/settings`)
User preferences, notifications, data export, and security settings.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Node**: 18+ recommended

## Features

- Fully responsive design (mobile-first)
- Modern, clean UI
- Interactive components
- Type-safe with TypeScript
- Fast page loads with Next.js
- Easy navigation with sidebar

## Development Tips

### Adding a New Page
1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` inside
3. Create component in `src/components/`
4. Update sidebar navigation

### Component Example
```tsx
"use client";

export function MyComponent() {
  return (
    <div>
      {/* Your component code */}
    </div>
  );
}
```

### Using Tailwind CSS
```tsx
<div className="bg-blue-600 text-white p-4 rounded-lg">
  Styled element
</div>
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js
5. Deploy!

### Manual Deployment
```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Troubleshooting

### Port Already in Use
If port 3000 is busy, Next.js will automatically use 3001, 3002, etc.

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

### Type Errors
Check `tsconfig.json` and ensure all dependencies are installed.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## Team Collaboration

The frontend is ready for deployment and can work independently. The backend team will later integrate their API endpoints.

**Current Status**: Complete and ready to deploy

---


