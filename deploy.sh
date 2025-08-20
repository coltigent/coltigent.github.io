#!/bin/bash

echo "🚀 Deploying Coltigent Website to GitHub Pages..."

# Clean and build
echo "📦 Building React app..."
rm -rf build
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npx gh-pages -d build

echo "✅ Deployment completed!"
echo "🌐 Website: https://coltigent.github.io"
echo "⏱️  Wait 2-5 minutes for changes to appear"
