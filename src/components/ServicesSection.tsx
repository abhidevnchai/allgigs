import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/services";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export function ServicesSection() {
  const navigate = useNavigate();
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
        behavior: "smooth",
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

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseUp);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 350; // Width of one card
    const maxScroll = container.scrollWidth - container.clientWidth;
    let newScrollLeft =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    // Infinite scroll effect for buttons
    if (newScrollLeft > maxScroll) {
      newScrollLeft = 0;
    } else if (newScrollLeft < 0) {
      newScrollLeft = maxScroll;
    }

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div id="services" className=" py-24 bg-mint">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
        Our Services
      </h2>
      <p className="text-center text-slate-200 mb-16 max-w-2xl mx-auto font-medium">
        Discover our comprehensive range of professional services designed to
        make your life easier
      </p>

      <div className="relative overflow-hidden group">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-sage-600/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
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
          className={`flex overflow-x-auto gap-6 pb-4 scrollbar-hide select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
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
                  delay: index * 0.1,
                },
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
      {/* Add CTA Section */}
      <div className="mt-16 text-center">
        <p className="text-slate-700 mb-6">
          Looking for more detailed information about our services?
        </p>
        <motion.button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-sage-700 text-white 
                   rounded-lg hover:bg-sage-600 transition-colors group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
}
