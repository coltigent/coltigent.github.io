
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import ScrollToTop from './components/ScrollToTop';

// Animation Components
import LoadingScreen from './components/LoadingScreen';
import MouseAnimation from './components/MouseAnimation';
import ScrollToTopButton from './components/ScrollToTopButton';

// Page Components
import Home from './components/Home';
import Career from './components/Career';

// Service Components
import WebDevelopment from './components/services/WebDevelopment';
import ITConsulting from './components/services/ITConsulting';
import CustomSoftware from './components/services/CustomSoftware';
import DataEngineering from './components/services/DataEngineering';
import MediaService from './components/services/MediaService';
import CloudService from './components/services/CloudService';

// Error Page
import NotFound from './components/NotFound';

// Styles
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <Router>
        <Helmet>
          <title>Coltigent Technology Services - IT Consulting & Software Solutions</title>
          <meta name="description" content="Leading IT consulting, software development, and digital transformation solutions. Specializing in web development, cloud computing, data engineering, and AI/ML integration." />
          <meta name="keywords" content="IT consulting, software development, web development, cloud computing, data engineering, AI/ML, digital transformation, technology services" />
          <meta name="author" content="Coltigent Technology Services Pvt Ltd" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Coltigent Technology Services - IT Consulting & Software Solutions" />
          <meta property="og:description" content="Leading IT consulting, software development, and digital transformation solutions. Specializing in web development, cloud computing, data engineering, and AI/ML integration." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://coltigent.github.io" />
          <meta property="og:image" content="%PUBLIC_URL%/logo512.png" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Coltigent Technology Services - IT Consulting & Software Solutions" />
          <meta name="twitter:description" content="Leading IT consulting, software development, and digital transformation solutions. Specializing in web development, cloud computing, data engineering, and AI/ML integration." />
          <meta name="twitter:image" content="%PUBLIC_URL%/logo512.png" />
          
          {/* Additional Meta Tags */}
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://coltigent.github.io" />
        </Helmet>

        <MouseAnimation />
        <ScrollToTop />
        <ScrollToTopButton />
        <Navbar />
      
              <main>
          <Routes>
            {/* Main Single Page */}
            <Route path="/" element={<Home />} />
            
            {/* Career Page - Separate page */}
            <Route path="/career" element={<Career />} />
            
            {/* Service Pages for direct access */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/cloud-services" element={<CloudService />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/data-engineering" element={<DataEngineering />} />
            <Route path="/services/media-services" element={<MediaService />} />
            
            {/* Legacy Routes for Backward Compatibility */}
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/carear" element={<Career />} />
            <Route path="/services/cloudservices" element={<CloudService />} />
            <Route path="/services/itconsulting" element={<ITConsulting />} />
            <Route path="/services/Customsof" element={<CustomSoftware />} />
            <Route path="/services/big_data_engineer" element={<DataEngineering />} />
            <Route path="/services/media_service" element={<MediaService />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      
      <Footer />
        </Router>
      </>
    );
  }

  export default App;
