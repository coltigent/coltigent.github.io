# Coltigent Technology Services - Official Website

A modern, responsive website for Coltigent Technology Services Pvt Ltd, showcasing our IT consulting, software development, and digital transformation solutions.

## 🌟 Features

- **Modern Design**: Clean, professional design with Bootstrap 5 and custom CSS
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Performance**: Optimized images, lazy loading, and efficient code
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Contact Forms**: Integrated contact forms with Formspree
- **Animations**: Smooth scroll animations with AOS library
- **GitHub Pages Ready**: Configured for easy deployment

## 🚀 Tech Stack

- **Frontend**: React 19, Bootstrap 5, CSS3
- **Routing**: React Router DOM
- **Animations**: AOS (Animate On Scroll)
- **SEO**: React Helmet
- **Forms**: Formspree integration
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 🛠️ Installation & Setup

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
   Navigate to `http://localhost:3000` to view the website.

## 📁 Project Structure

```
coltigent.github.io/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── images/             # Static images
├── src/
│   ├── components/         # React components
│   │   ├── Home.js         # Homepage component
│   │   ├── About.js        # About page
│   │   ├── Contact.js      # Contact page
│   │   ├── Career.js       # Careers page
│   │   ├── NotFound.js     # 404 page
│   │   └── services/       # Service pages
│   ├── layout/
│   │   ├── Navbar.js       # Navigation component
│   │   └── Footer.js       # Footer component
│   ├── images/             # Component images
│   ├── App.js              # Main App component
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  /* ... other colors */
}
```

### Content
- Update company information in respective components
- Modify service descriptions in `src/components/Home.js`
- Update contact information in `src/components/Contact.js`
- Change images in `src/images/` directory

### Styling
- Global styles are in `src/App.css`
- Component-specific styles can be added inline or in separate CSS files
- Bootstrap classes are used for layout and components

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Your site will be available at `https://coltigent.github.io`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload build folder**
   - Upload the contents of the `build/` folder to your web server
   - Ensure your server is configured for single-page applications

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages
- `npm run eject` - Eject from Create React App

## 📞 Contact Information

- **Email**: info@coltigent.com
- **Phone**: +91 123 456 7890
- **Address**: Office #818, 8th Floor, Bramha SKY Uzuri (A Building), Opp. PCMC Corporation Building, Pimpri, Pune, Maharashtra - 411018

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for icons
- AOS library for scroll animations
- React community for excellent documentation

## 🔄 Updates & Maintenance

- Regularly update dependencies for security patches
- Monitor website performance using Google PageSpeed Insights
- Keep content fresh and relevant
- Test on different devices and browsers

---

**Coltigent Technology Services Pvt Ltd** - Transforming businesses through innovative technology solutions.