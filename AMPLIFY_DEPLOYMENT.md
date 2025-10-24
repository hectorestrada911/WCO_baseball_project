# AWS Amplify Deployment Guide

This guide explains how to deploy the Baseball Data Platform to AWS Amplify.

## Prerequisites

1. AWS Account with Amplify access
2. GitHub repository with your code
3. Node.js 18+ installed locally (for testing)

## Deployment Steps

### 1. Connect Repository to Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Select the main branch
5. Amplify will automatically detect the `amplify.yml` configuration

### 2. Build Settings

The project is configured with the following build settings in `amplify.yml`:

```yaml
version: 1
applications:
  - appRoot: frontend
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: out
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - .next/cache/**/*
```

### 3. Environment Variables

If your app needs environment variables:

1. In Amplify Console, go to your app
2. Navigate to "Environment variables"
3. Add any required variables (e.g., API endpoints, keys)

### 4. Custom Domain (Optional)

1. In Amplify Console, go to "Domain management"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Local Testing

Before deploying, test the build locally:

```bash
cd frontend
npm install
npm run build
```

This will create an `out` directory with the static files that Amplify will serve.

## Key Configuration Changes Made

### Next.js Configuration (`next.config.ts`)
- Added `output: 'export'` for static site generation
- Enabled `trailingSlash: true` for better routing
- Set `images: { unoptimized: true }` for static export compatibility

### Build Process
- Updated `amplify.yml` to use the `out` directory as the base directory
- Removed Turbopack from production build for better compatibility
- Added proper caching for node_modules and Next.js cache

### Tailwind CSS
- Created proper `tailwind.config.js` file
- Updated PostCSS configuration
- Fixed CSS imports in `globals.css`

## Troubleshooting

### Build Failures
- Check that all dependencies are in `package.json`
- Ensure TypeScript compilation passes locally
- Verify that all imports are correct

### Routing Issues
- Static export doesn't support dynamic routes with server-side features
- All routes must be statically generated at build time

### Asset Loading
- Images and assets are served from the root path
- Ensure all asset paths are relative or use the correct base path

## Performance Optimization

The static export provides:
- Fast loading times
- CDN distribution
- No server-side rendering overhead
- Better caching

## Monitoring

After deployment, monitor your app using:
- AWS Amplify Console metrics
- CloudWatch logs (if enabled)
- Browser developer tools for performance

## Support

For issues with this deployment setup, check:
1. AWS Amplify documentation
2. Next.js static export documentation
3. Project-specific issues in the GitHub repository
