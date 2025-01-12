import { services } from '../data/services';
import { motion } from 'framer-motion';

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-sage-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Our Services & Pricing
        </h1>
        
        <div className="grid gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-sage-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sage-600 mb-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 