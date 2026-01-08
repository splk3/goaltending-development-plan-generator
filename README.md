# Goalie Gen

Goalie Gen (Goaltending Development Plan Generator) makes it easy for youth ice hockey teams and clubs to generate customized goaltending development plans.

## 🚀 Quick Start

1.  **Install dependencies**

    ```shell
    npm install
    ```

2.  **Start developing**

    ```shell
    npm run develop
    ```

3.  **View the site**

    Your site is now running at `http://localhost:8000`!

## 🛠 Tech Stack

- **GatsbyJS 5** - React-based static site generator
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 18** - JavaScript library for building user interfaces
- **PDF/Document Generation** - jsPDF and docx libraries for exporting plans

## 🎨 Design

The site uses USA national colors:
- Blue: `#002868` (usa-blue)
- Red: `#BF0A30` (usa-red)
- White: `#FFFFFF` (usa-white)

## 📦 Available Scripts

- `npm run develop` - Start the development server
- `npm run build` - Build the production site
- `npm run serve` - Serve the production build locally
- `npm run clean` - Clean the cache and public directories
- `npm run deploy` - Build and deploy to GitHub Pages

## 📁 Project Structure

```
goalie-gen/
├── src/
│   ├── components/       # React components (TypeScript)
│   │   ├── Logo.tsx
│   │   ├── SEO.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── GeneratePlanButton.tsx
│   │   ├── GenerateTeamPlanButton.tsx
│   │   ├── GoalieJournalButton.tsx
│   │   ├── DownloadDrillButton.tsx
│   │   ├── DownloadMaterialButton.tsx
│   │   └── TermsPopup.tsx
│   ├── pages/            # Page components (auto-routed)
│   │   └── index.tsx     # Home page
│   ├── styles/           # Global CSS styles
│   └── utils/            # Utility functions
│       └── analytics.ts  # Analytics utilities
├── static/               # Static assets
│   ├── CNAME            # Custom domain configuration
│   ├── favicons/        # Site icons
│   ├── images/          # Static images
│   └── pdfs/            # PDF resources
├── gatsby-config.ts     # Gatsby configuration (TypeScript)
├── gatsby-browser.tsx   # Browser APIs (TypeScript)
├── gatsby-ssr.tsx       # SSR APIs (TypeScript)
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🔧 TypeScript Support

This project is fully TypeScript-enabled:
- All Gatsby configuration files use TypeScript (`.ts` extensions)
- All components and pages use TypeScript/TSX (`.tsx` extensions)
- Type definitions included for all dependencies
- TypeScript compilation handled automatically by Gatsby

## 🚀 Deployment

This site is deployed to GitHub Pages with custom domain support via GitHub Actions.

### Automated Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch using the `.github/workflows/deploy.yml` workflow.

### Custom Domains

The site is configured to support both development and production custom domains:

- **Development**: `https://dev.goaliegen.com` (set in `.env.development`)
- **Production**: `https://goaliegen.com` (set in `.env.production`)

The custom domain is configured via the `static/CNAME` file (currently set to `dev.goaliegen.com`).

### Manual Deployment

To manually build and deploy:

```shell
npm run deploy
```

This command builds the site and pushes the `public/` directory to the `gh-pages` branch.

### Environment Configuration

- The `GATSBY_SITE_URL` environment variable sets the site URL for SEO and metadata
- Development builds use `.env.development` automatically
- Production builds use `.env.production` when `NODE_ENV=production`
- Custom domain is set in `static/CNAME` file

## 📝 License

See the [LICENSE](LICENSE) file for details.
