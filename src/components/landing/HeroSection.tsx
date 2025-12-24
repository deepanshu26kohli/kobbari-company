
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import copraFarming from '../../assets/images/copra-farming.png';
import copraBags from '../../assets/images/copra-bags.png';
// Using placeholders for now, will replace with generated images
import copraHands from '../../assets/images/copra-farming.png';
import copraTrucks from '../../assets/images/copra-bags.png';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

const slides = [
  {
    image: copraFarming,
    title: "Empowering Farmers",
    subtitle: "Sourcing directly from the hands that nurture the land",
    overlayColor: "bg-black/40"
  },
  {
    image: copraBags,
    title: "Bulk Supply Capability",
    subtitle: "Ready to ship metric tons of premium quality copra",
    overlayColor: "bg-black/50"
  },
  {
    image: copraHands, // Placeholder
    title: "Hand-Picked Quality",
    subtitle: "Every piece inspected for superior oil content",
    overlayColor: "bg-black/40"
  },
  {
    image: copraTrucks, // Placeholder
    title: "Global Logistics",
    subtitle: "Seamless transport network delivering to your doorstep",
    overlayColor: "bg-black/50"
  }
];

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Carousel Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className={`absolute inset-0 ${slide.overlayColor} z-10`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
        </div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-white font-medium tracking-widest text-sm md:text-base uppercase mb-4 animate-fade-in">
          The Kobbari Company
        </h2>

        <div className="h-32 md:h-48  relative mb-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 transform ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif whitespace-nowrap">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mt-4 font-light">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={onOpenInquiry}
            className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 flex items-center space-x-2"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('our-foundation')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full text-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Our Story
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-[-10%] left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-green-500 w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
