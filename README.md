# Baseball Data Platform

A comprehensive web application for tracking and analyzing baseball performance data from TrackMan CSV files.

## Project Structure

```
WCO_baseball_project/
├── frontend/          # Next.js web application
├── backend/           # Backend API and data processing (coming later)
└── README.md          # This file
```

## Quick Start

### Frontend Development

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:3000`

## Team Collaboration

### Current Status
- **Frontend**: Complete and ready to deploy
- **Backend**: To be implemented by backend team

### Frontend Work
Everything is built in the `frontend/` folder. The team can:
- Push changes directly to the main branch
- Deploy to Vercel for team preview
- Continue adding features and pages

### Backend Team (Later)
When they're ready, they'll create a `backend/` folder alongside the `frontend/` with:
- API endpoints for data processing
- Database connections
- CSV upload handling
- Authentication services

## What's Included

### Frontend Features
- **Home Dashboard** - Overview of team statistics and activity
- **Roster Page** - Player cards with basic information
- **Team Info** - Coaching staff, schedule, contact details
- **Leaderboards** - Performance rankings and metrics
- **Player Stats** - Individual player statistics
- **Upload Page** - CSV file upload interface
- **Settings** - User preferences and configuration

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Available Scripts

### Frontend
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Write clear, short comments
- Keep components modular and reusable
- Follow Next.js best practices

### File Organization
```
frontend/src/
├── app/              # Page routes (Next.js App Router)
├── components/       # Reusable React components
└── globals.css       # Global styles
```

## Deployment

### Frontend (AWS Amplify)
1. Push code to GitHub
2. Connect repository to AWS Amplify
3. Amplify auto-deploys on every push using `amplify.yml`
4. Share preview URL with team

**Quick Setup:**
- See [AMPLIFY_DEPLOYMENT.md](./AMPLIFY_DEPLOYMENT.md) for detailed instructions
- The project is pre-configured for static export deployment
- Build artifacts are generated in the `out` directory

### Frontend (Vercel - Alternative)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on every push
4. Share preview URL with team

### Backend (Coming Soon)
Backend team will handle AWS infrastructure:
- S3 for file storage
- Lambda for processing
- API Gateway for endpoints
- Aurora Postgres for database

## Documentation

### For New Team Members
1. Clone the repository
2. Navigate to `frontend/` folder
3. Run `npm install`
4. Run `npm run dev`
5. Start coding!

### Adding New Pages
1. Create page file in `src/app/[page-name]/page.tsx`
2. Create component in `src/components/[PageName].tsx`
3. Add route to sidebar in `src/components/Sidebar.tsx`

### Adding New Components
1. Create file in `src/components/[ComponentName].tsx`
2. Export component with "use client" if needed
3. Import and use in your pages

## Contributing

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make changes
3. Test locally
4. Commit: `git commit -m "Add new feature"`
5. Push: `git push origin feature/new-feature`
6. Create pull request for team review

## Contact

For questions or issues, reach out to the team lead.

---

**Note**: This is a student project. Focus on clean code, good documentation, and team collaboration!

