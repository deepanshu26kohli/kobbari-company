import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    // { id: 'products', label: 'Products' },
    // { id: 'about', label: 'About Us' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-900">Kobbari Company</h1>
                <p className="text-xs text-green-700">Premium Bulk Supply</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${currentPage === item.id
                    ? 'text-green-800 border-b-2 border-green-800'
                    : 'text-gray-600 hover:text-green-800'
                  } pb-1`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => onNavigate('home')}
              className="bg-green-800 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-900 transition-colors"
            >
              Request Quote
            </button>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium ${currentPage === item.id ? 'text-green-800 bg-green-50' : 'text-gray-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-green-800 text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              Request Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
