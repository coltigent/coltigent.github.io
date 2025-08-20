# Development Guide - Coltigent Website

This guide will help you set up and test the Coltigent website locally, and understand the automated deployment process.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/coltigent/coltigent.github.io.git
   cd coltigent.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🧪 Testing Options

### Option 1: Using the Test Script (Recommended)
```bash
# Interactive menu
./scripts/test-local.sh

# Or use specific commands
./scripts/test-local.sh dev      # Start development server
./scripts/test-local.sh build    # Build for production
./scripts/test-local.sh test-build  # Test production build locally
./scripts/test-local.sh test     # Run tests
./scripts/test-local.sh check    # Check for issues
```

### Option 2: Using npm Scripts
```bash
# Development
npm run dev          # Start development server
npm start           # Same as dev

# Production testing
npm run build       # Build for production
npm run serve       # Serve production build locally
npm run test:build  # Build and serve locally

# Code quality
npm run lint        # Check for linting issues
npm run lint:fix    # Fix linting issues automatically
npm run format      # Format code with Prettier

# Analysis
npm run analyze     # Analyze bundle size
npm run check-deps  # Check for unused dependencies
npm run security-audit  # Check for security vulnerabilities
```

## 🔄 Development Workflow

### 1. **Daily Development**
```bash
# Start development server
npm start

# Make your changes in the code
# The browser will automatically reload

# Test your changes
npm test
```

### 2. **Before Committing**
```bash
# Check for issues
npm run lint
npm run security-audit

# Fix any issues
npm run lint:fix
npm run format

# Test the build
npm run build
```

### 3. **Testing Production Build Locally**
```bash
# Build and serve production version
npm run test:build

# This will:
# 1. Build the project for production
# 2. Serve it locally at http://localhost:3000
# 3. Show you exactly how it will look when deployed
```

## 🤖 Automated Deployment

### GitHub Actions Workflow

The website automatically deploys to GitHub Pages when you push to the `main` branch.

**Workflow Files:**
- `.github/workflows/deploy.yml` - Main deployment workflow
- `.github/workflows/test.yml` - Testing workflow for pull requests

### How It Works

1. **Push to main branch** → Triggers automatic deployment
2. **GitHub Actions** → Builds the project
3. **Deployment** → Publishes to GitHub Pages
4. **Website** → Available at `https://coltigent.github.io`

### Manual Deployment

If you need to deploy manually:
```bash
npm run deploy
```

## 🧪 Testing Checklist

### Before Pushing to GitHub

- [ ] **Code Quality**
  - [ ] Run `npm run lint` - No linting errors
  - [ ] Run `npm run format` - Code is properly formatted
  - [ ] Run `npm run security-audit` - No security vulnerabilities

- [ ] **Functionality**
  - [ ] Test all pages locally (`npm start`)
  - [ ] Test production build (`npm run test:build`)
  - [ ] Test responsive design on different screen sizes
  - [ ] Test all forms and interactions

- [ ] **Performance**
  - [ ] Run `npm run build` - Build succeeds
  - [ ] Check bundle size is reasonable
  - [ ] Test loading speed

### Browser Testing

Test the website in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Common Issues

**1. Port 3000 already in use**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

**2. Build fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**3. Dependencies issues**
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**4. GitHub Actions fails**
- Check the Actions tab in your GitHub repository
- Look for specific error messages
- Ensure all dependencies are properly listed in `package.json`

### Performance Issues

**1. Slow development server**
```bash
# Use a faster package manager
npm install -g yarn
yarn install
yarn start
```

**2. Large bundle size**
```bash
# Analyze bundle
npm run analyze

# Look for large dependencies and optimize
```

## 📊 Monitoring & Analytics

### Local Performance Testing
```bash
# Build and analyze
npm run build
npm run analyze
```

### Production Monitoring
- **Google PageSpeed Insights**: Test your live site
- **Core Web Vitals**: Monitor performance metrics
- **Google Analytics**: Track user behavior

## 🔒 Security

### Regular Security Checks
```bash
# Check for vulnerabilities
npm run security-audit

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

### Best Practices
- Keep dependencies updated
- Don't commit sensitive data
- Use environment variables for secrets
- Regularly audit your code

## 📝 Code Standards

### JavaScript/React
- Use functional components with hooks
- Follow ESLint rules
- Use meaningful variable and function names
- Add comments for complex logic

### CSS
- Use CSS variables for consistency
- Follow BEM methodology
- Keep styles modular
- Use responsive design principles

### Git
- Use meaningful commit messages
- Create feature branches for new features
- Test before pushing to main
- Keep commits atomic and focused

## 🚀 Deployment Checklist

### Before Deploying
- [ ] All tests pass
- [ ] Build succeeds locally
- [ ] No console errors
- [ ] All links work
- [ ] Forms function properly
- [ ] Images load correctly
- [ ] Responsive design works
- [ ] SEO meta tags are correct

### After Deploying
- [ ] Check live site functionality
- [ ] Test on different devices
- [ ] Verify all pages load
- [ ] Check contact forms
- [ ] Monitor for errors
- [ ] Test performance

## 📞 Support

### Getting Help
1. Check this documentation
2. Look at the README.md file
3. Check GitHub Issues
4. Contact the development team

### Useful Commands Reference
```bash
# Development
npm start              # Start development server
npm run dev           # Same as start

# Building
npm run build         # Build for production
npm run test:build    # Build and serve locally

# Testing
npm test              # Run tests
npm run lint          # Check code quality
npm run lint:fix      # Fix code quality issues

# Deployment
npm run deploy        # Deploy to GitHub Pages

# Analysis
npm run analyze       # Analyze bundle
npm run check-deps    # Check dependencies
npm run security-audit # Security check
```

---

**Happy Coding! 🎉**
