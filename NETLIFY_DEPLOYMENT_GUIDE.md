# Deploying QuantPortfol.io to Netlify

This guide covers how to deploy your application to Netlify, which provides a seamless hosting environment for your React application.

## Quick Start

We've configured your application for easy deployment to Netlify with the following files:
- `netlify.toml` - Configuration for build settings and redirects
- `netlify-build.sh` - Custom build script
- `netlify/functions/geolocation.js` - Serverless function for geolocation

## Preparation Steps

1. **Sign up for Netlify** if you don't already have an account at [netlify.com](https://www.netlify.com/)

2. **Install Netlify CLI** (optional, for local testing)
   ```
   npm install -g netlify-cli
   ```

## Deployment Process

### Method 1: Direct GitHub Integration (Recommended)

1. **Push your code to GitHub**
   - Create a repository on GitHub if you haven't already
   - Push your code to the repository

2. **Connect to Netlify**
   - Log in to your Netlify account
   - Click "New site from Git"
   - Choose GitHub as the Git provider
   - Authorize Netlify to access your repositories
   - Select your repository

3. **Configure Build Settings** (Should be auto-detected from netlify.toml)
   - Build command: `bash netlify-build.sh`
   - Publish directory: `client/dist`
   - Click "Deploy site"

4. **Environment Variables**
   - After the initial deployment, go to Site settings > Build & deploy > Environment
   - Add the following environment variables if needed:
     - `DATABASE_URL` (if using the database)
     - Any other API keys or secrets your application uses

### Method 2: Manual Deployment

1. **Build Your Project Locally**
   ```
   bash netlify-build.sh
   ```

2. **Deploy to Netlify via drag-and-drop**
   - Go to the Netlify dashboard
   - Drag and drop the `client/dist` folder onto the Netlify dashboard
   - Netlify will automatically deploy your site

> **Note:** You'll still need to set up the serverless functions if using the drag-and-drop method.

## Configuration for Serverless Functions

1. The `netlify.toml` file in this project is already configured to use Netlify Functions.

2. The serverless functions in the `netlify/functions` directory will be automatically deployed:
   - `geolocation.js` - Handles the geolocation API requests

3. If you need to add more functions, simply create additional JavaScript files in the `netlify/functions` directory.

## Post-Deployment Steps

1. **Set up your custom domain** (if desired)
   - Go to Site settings > Domain management
   - Add your custom domain and follow the verification steps

2. **Enable HTTPS**
   - This is automatic with Netlify

3. **Set up forms** (if used)
   - Add the `netlify` attribute to your HTML forms

## Testing Your Deployment

After deployment, your site will be available at a URL like `https://your-site-name.netlify.app`.

## Troubleshooting

If you encounter issues:

1. Check the Netlify deployment logs for errors
2. Verify environment variables are set correctly
3. Make sure your build is generating all required files in `client/dist`
4. For API/serverless function issues, check the Function logs in the Netlify dashboard

## Database Configuration

For applications using a database:

1. Use a database service that provides an accessible connection string (like Neon, PlanetScale, or Supabase)
2. Add the connection string as an environment variable in Netlify
3. Make sure serverless functions are configured to use the database properly

## Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Netlify CLI Documentation](https://docs.netlify.com/cli/get-started/)