import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const websiteDown = true
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  useEffect(() => {
    if (currentPage === 'home') {
      document.title = 'The Kobbari Company - Premium Bulk Coconut & Copra Supplier from India';
    } else if (currentPage === 'products') {
      document.title = 'B2B Product Catalog - The Kobbari Company';
    } else if (currentPage === 'about') {
      document.title = 'About Us & Sourcing - The Kobbari Company';
    } else if (currentPage === 'contact') {
      document.title = 'Contact Us - The Kobbari Company';
    }
  }, [currentPage]);
  
  return (
    <>
    {
      websiteDown ? <div className="min-h-screen bg-white">
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Website Down</h1>
          <p className="text-lg">Sorry, this website is currently down.</p>
        </div>
      </div> 
      </div>
       : 
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && (
          <Home onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'products' && (
          <Products onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'about' && (
          <About onOpenInquiry={handleOpenInquiry} />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      <Footer />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
      />
    </div>
      }
      </>
  );
}

export default App;
