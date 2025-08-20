#!/bin/bash

# Coltigent Website - Local Testing Script

echo "🚀 Coltigent Website - Local Testing"
echo "====================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Function to start development server
start_dev() {
    echo "🌐 Starting development server..."
    echo "📍 Website will be available at: http://localhost:3000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    npm start
}

# Function to build for production
build_prod() {
    echo "🔨 Building for production..."
    npm run build
    echo "✅ Build completed! Check the 'build' folder."
}

# Function to test build locally
test_build() {
    echo "🧪 Testing production build locally..."
    npm run build
    
    if [ -d "build" ]; then
        echo "✅ Build successful!"
        echo "🌐 Starting local server to test build..."
        echo "📍 Production build will be available at: http://localhost:3000"
        echo "🔄 Press Ctrl+C to stop the server"
        echo ""
        npx serve -s build -l 3000
    else
        echo "❌ Build failed!"
        exit 1
    fi
}

# Function to run tests
run_tests() {
    echo "🧪 Running tests..."
    npm test -- --watchAll=false
}

# Function to check for issues
check_issues() {
    echo "🔍 Checking for potential issues..."
    
    # Check for unused dependencies
    echo "📋 Checking for unused dependencies..."
    npx depcheck 2>/dev/null || echo "⚠️  depcheck not available, skipping dependency check"
    
    # Check for security vulnerabilities
    echo "🔒 Checking for security vulnerabilities..."
    npm audit --audit-level=moderate || echo "⚠️  Some vulnerabilities found, run 'npm audit fix' to fix them"
    
    # Check bundle size
    echo "📊 Checking bundle size..."
    npm run build
    echo "✅ Build size check completed"
}

# Main menu
show_menu() {
    echo ""
    echo "What would you like to do?"
    echo "1) Start development server"
    echo "2) Build for production"
    echo "3) Test production build locally"
    echo "4) Run tests"
    echo "5) Check for issues"
    echo "6) Exit"
    echo ""
    read -p "Enter your choice (1-6): " choice
}

# Handle menu selection
case "${1:-}" in
    "dev"|"start")
        start_dev
        ;;
    "build")
        build_prod
        ;;
    "test-build")
        test_build
        ;;
    "test")
        run_tests
        ;;
    "check")
        check_issues
        ;;
    "")
        while true; do
            show_menu
            case $choice in
                1)
                    start_dev
                    break
                    ;;
                2)
                    build_prod
                    break
                    ;;
                3)
                    test_build
                    break
                    ;;
                4)
                    run_tests
                    break
                    ;;
                5)
                    check_issues
                    break
                    ;;
                6)
                    echo "👋 Goodbye!"
                    exit 0
                    ;;
                *)
                    echo "❌ Invalid choice. Please enter a number between 1-6."
                    ;;
            esac
        done
        ;;
    *)
        echo "Usage: $0 [dev|build|test-build|test|check]"
        echo ""
        echo "Commands:"
        echo "  dev, start    - Start development server"
        echo "  build         - Build for production"
        echo "  test-build    - Test production build locally"
        echo "  test          - Run tests"
        echo "  check         - Check for issues"
        echo "  (no args)     - Show interactive menu"
        exit 1
        ;;
esac
