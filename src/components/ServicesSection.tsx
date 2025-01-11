import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/services";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      
      // Smooth infinite scroll effect
      const scrollAmount = delta * 1.5;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      let newScrollLeft = container.scrollLeft + scrollAmount;
      
      // Create infinite scroll effect
      if (newScrollLeft > maxScroll) {
        newScrollLeft = 0;
      } else if (newScrollLeft < 0) {
        newScrollLeft = maxScroll;
      }
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    };

    // Mouse drag scrolling
    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 350; // Width of one card
    const maxScroll = container.scrollWidth - container.clientWidth;
    let newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    // Infinite scroll effect for buttons
    if (newScrollLeft > maxScroll) {
      newScrollLeft = 0;
    } else if (newScrollLeft < 0) {
      newScrollLeft = maxScroll;
    }

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div id="services" className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-sage-800">
        Our Services
      </h2>
      <p className="text-center text-sage-600 mb-16 max-w-2xl mx-auto font-medium">
        Discover our comprehensive range of professional services designed to
        make your life easier
      </p>
      
      <div className="relative overflow-hidden group">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-sage-600/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-sage-600/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className={`flex overflow-x-auto gap-6 pb-4 scrollbar-hide select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth'
          }}
        >
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: index * 0.1
                }
              }}
              className="flex-shrink-0 min-w-[350px]"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
