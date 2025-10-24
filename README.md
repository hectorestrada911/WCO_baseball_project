# Baseball Data Platform

A comprehensive platform for analyzing TrackMan CSV data with modern web technologies.

## Project Structure

```
baseball-organized/
├── frontend/          # Next.js React application
├── backend/           # Node.js Express API
└── README.md         # This file
```

## Quick Start

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
npm install
npm run dev
```

## Features

- **Frontend**: Modern React/Next.js application with Tailwind CSS
- **Backend**: Express.js API for data processing
- **Data**: TrackMan CSV integration
- **UI**: SDSU red and black theme
- **Responsive**: Mobile-first design

## Technology Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Data**: TrackMan CSV processing
- **Deployment**: AWS Amplify (Frontend), TBD (Backend)

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
