import { useState, useEffect } from 'react';
import { Star, Calendar, MapPin, Clock, ThumbsUp, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Sarah Johnson',
    service: 'House Cleaning',
    text: "The best cleaning service I've ever used. Professional and thorough! The team arrived on time and paid attention to every detail. They were respectful of my home and belongings, using eco-friendly products as requested.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100",
    date: "2024-02-15",
    duration: "3 hours",
    recommended: true,
    location: "Boston, MA",
    serviceDetails: "Deep Cleaning - 3 Bedroom House",
    highlights: ["Eco-friendly products", "On-time arrival", "Attention to detail"]
  },
  {
    name: 'Mike Peters',
    service: 'Snow Removal',
    text: 'Reliable and prompt service, especially during heavy snowfall.',
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100",
    date: "2024-01-15",
    duration: "1 hours",
    recommended: true,
    location: "NY, MA",
    serviceDetails: "Deep Cleaning - 3 Bedroom House",
    highlights: ["Eco-friendly products", "On-time arrival", "Attention to detail"]
  },
  {
    name: 'Emily Rodriguez',
    service: 'Moving Help',
    text: 'Made my moving day stress-free! The team was efficient and careful with my belongings.',
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100",
    date: "2024-02-15",
    duration: "3 hours",
    recommended: true,
    location: "Boston, MA",
    serviceDetails: "Deep Cleaning - 3 Bedroom House",
    highlights: ["Eco-friendly products", "On-time arrival", "Attention to detail"]
  },
  {
    name: 'David Chen',
    service: 'Garbage Cleaning',
    text: 'Great service! They were on time and did a fantastic job with the cleanup.',
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100",
    date: "2024-02-15",
    duration: "3 hours",
    recommended: true,
    location: "Boston, MA",
    serviceDetails: "Deep Cleaning - 3 Bedroom House",
    highlights: ["Eco-friendly products", "On-time arrival", "Attention to detail"]
  },
  {
    name: 'Lisa Thompson',
    service: 'Deep House Cleaning',
    text: 'Transformed my home! Their attention to detail is impressive.',
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100",
    date: "2024-02-15",
    duration: "3 hours",
    recommended: true,
    location: "Boston, MA",
    serviceDetails: "Deep Cleaning - 3 Bedroom House",
    highlights: ["Eco-friendly products", "On-time arrival", "Attention to detail"]
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const prevSlide = () => {
  //   setDirection(-1);
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
  //   );
  // };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-sage-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sage-800 mb-3 sm:mb-4">
            Customer Stories
          </h2>
          <p className="text-sage-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real experiences from our valued customers who've trusted our services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] sm:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="p-4 sm:p-6 lg:p-8 rounded-xl bg-white shadow-lg border border-sage-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={reviews[currentIndex].image}
                        alt={reviews[currentIndex].name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-earth-300"
                      />
                      <div>
                        <h3 className="font-semibold text-lg sm:text-xl text-sage-800">
                          {reviews[currentIndex].name}
                        </h3>
                        <p className="text-sage-600 text-sm">{reviews[currentIndex].serviceDetails}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-earth-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-sage-600">
                      <Calendar size={14} />
                      <span>{reviews[currentIndex].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sage-600">
                      <Clock size={14} />
                      <span>{reviews[currentIndex].duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sage-600">
                      <MapPin size={14} />
                      <span>{reviews[currentIndex].location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-earth-400">
                      <ThumbsUp size={14} />
                      <span>Recommended</span>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <Quote className="text-sage-300 w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                    <p className="text-sage-700 text-base sm:text-lg leading-relaxed">
                      {reviews[currentIndex].text}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {reviews[currentIndex].highlights?.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-sage-100 text-sage-600 rounded-full text-xs sm:text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-earth-400 w-4' : 'bg-sage-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}