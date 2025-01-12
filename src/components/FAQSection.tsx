import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a service?",
    answer: "Booking a service is easy! Simply browse our services, select the one you need, choose your preferred date and time, and complete the booking form. You'll receive a confirmation email once your booking is confirmed."
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve major metropolitan areas and surrounding suburbs. Enter your location on our booking page to check if we service your area."
  },
  {
    question: "How are service providers vetted?",
    answer: "All our service providers undergo thorough background checks, reference verification, and skills assessment. We ensure they meet our high standards of professionalism and expertise."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel or reschedule your booking up to 24 hours before the scheduled service time without any charge. Late cancellations may incur a fee."
  },
  {
    question: "Do you offer recurring services?",
    answer: "Yes! You can set up recurring services on a weekly, bi-weekly, or monthly basis. This option is available during the booking process."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-sage-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-earth-300">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-sage-800/90 backdrop-blur-sm rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-sage-50 text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-earth-300 flex-shrink-0" />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-6 pb-3 sm:pb-4"
                  >
                    <p className="text-sage-200 text-sm sm:text-base">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 