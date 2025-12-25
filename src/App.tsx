import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const location = useLocation();

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      document.title = 'The Kobbari Company - Premium Bulk Coconut & Copra Supplier from India';
    } else if (path === '/products') {
      document.title = 'B2B Product Catalog - The Kobbari Company';
    } else if (path === '/about') {
      document.title = 'About Us & Sourcing - The Kobbari Company';
    } else if (path === '/contact') {
      document.title = 'Contact Us - The Kobbari Company';
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation onOpenInquiry={handleOpenInquiry} />

      <main>
        <Routes>
          <Route path="/" element={<Home onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/products" element={<Products onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/about" element={<About onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
      />
    </div>
  );
}

export default App;
