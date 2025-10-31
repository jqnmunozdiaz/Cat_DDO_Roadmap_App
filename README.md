# Cat DDO Roadmap App

A Next.js application for managing Cat DDO Roadmap pillars and assessments.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system. Node.js includes npm (Node Package Manager).

### Installing Node.js and npm

1. **Download Node.js:**
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for Windows
   - The installer includes npm automatically

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard
   - Accept the default settings (ensure "npm package manager" is checked)

3. **Verify Installation:**
   ```powershell
   node --version
   npm --version
   ```

## Installation

1. **Clone the repository** (if not already done)

2. **Install dependencies:**
   ```powershell
   npm install
   ```

## Development

To run the development server:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Building for Production

To create an optimized production build:

```powershell
npm run build
```

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel is the easiest way to deploy Next.js applications:

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy:**
   ```powershell
   vercel
   ```
   - Follow the prompts to link your project
   - Your app will be deployed with a URL provided

3. **Production Deployment:**
   ```powershell
   vercel --prod
   ```

**Or deploy via Vercel Dashboard:**
1. Visit [https://vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Import your repository
4. Vercel will auto-detect Next.js and configure everything
5. Click Deploy

### Option 2: GitHub Pages (Static Export)

For static deployment on GitHub Pages:

1. **Update `next.config.js`** to enable static export:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/Cat_DDO_Roadmap_App',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build static files:**
   ```powershell
   npm run build
   ```

3. **Deploy the `out` folder** to GitHub Pages

### Option 3: Self-Hosted Server

To run on your own server:

1. **Build the application:**
   ```powershell
   npm run build
   ```

2. **Start the production server:**
   ```powershell
   npm start
   ```
   The app will run on port 3000 by default.

3. **Run on a different port:**
   ```powershell
   $env:PORT=8080; npm start
   ```

### Option 4: Other Platforms

- **Netlify:** Connect your GitHub repo at [https://netlify.com](https://netlify.com)
- **AWS Amplify:** Deploy via AWS console
- **Railway:** Simple deployment at [https://railway.app](https://railway.app)
- **Render:** Deploy at [https://render.com](https://render.com)

## Environment Variables

If your app requires environment variables, create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Troubleshooting

**npm install fails:**
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Clear npm cache: `npm cache clean --force`

**Port already in use:**
- Use a different port: `$env:PORT=3001; npm run dev`

**Build errors:**
- Ensure all dependencies are installed: `npm install`
- Check Node.js version compatibility: `node --version` (should be 18.x or higher)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
