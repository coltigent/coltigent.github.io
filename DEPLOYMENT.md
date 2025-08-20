# Deployment Guide - Coltigent Technology Services Website

This guide will help you deploy the Coltigent website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step 1: Prepare Your Repository

1. **Create a new repository on GitHub**
   - Go to GitHub and create a new repository
   - Name it: `coltigent.github.io`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Coltigent website"
   git branch -M main
   git remote add origin https://github.com/coltigent/coltigent.github.io.git
   git push -u origin main
   ```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Build the Project

```bash
npm run build
```

## Step 4: Deploy to GitHub Pages

1. **Install gh-pages package** (if not already installed)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy the website**
   ```bash
   npm run deploy
   ```

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

## Step 6: Verify Deployment

- Your website will be available at: `https://coltigent.github.io`
- It may take a few minutes for the changes to appear

## Custom Domain (Optional)

If you want to use a custom domain:

1. **Purchase a domain** (e.g., from GoDaddy, Namecheap, etc.)
2. **Add CNAME record** pointing to `coltigent.github.io`
3. **Configure in GitHub Pages settings**:
   - Go to repository Settings > Pages
   - Add your custom domain in the "Custom domain" field
   - Save the changes

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for any syntax errors in your code
- Ensure all import paths are correct

### Deployment Issues
- Verify that the `homepage` field in `package.json` is set correctly
- Check that the gh-pages branch was created successfully
- Ensure the repository is public

### 404 Errors
- Make sure you're using `BrowserRouter` (not `HashRouter`)
- Verify that the `basename` is set correctly if needed

## Maintenance

### Updating the Website
1. Make your changes locally
2. Test with `npm start`
3. Build with `npm run build`
4. Deploy with `npm run deploy`

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Test the website regularly on different devices and browsers

## Performance Optimization

### Before Deployment
- Optimize images (compress, use appropriate formats)
- Minify CSS and JavaScript
- Enable gzip compression on your server
- Use a CDN for static assets

### Monitoring
- Use Google PageSpeed Insights to monitor performance
- Set up Google Analytics for traffic monitoring
- Monitor Core Web Vitals

## Security Considerations

- Keep dependencies updated
- Use HTTPS (GitHub Pages provides this automatically)
- Validate all form inputs
- Implement proper CORS policies if needed
- Regular security audits

## Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all file paths and imports
3. Ensure all required dependencies are installed
4. Check GitHub Pages documentation
5. Contact the development team

---

**Note**: This website is configured for GitHub Pages deployment. For other hosting platforms, you may need to adjust the configuration accordingly.
