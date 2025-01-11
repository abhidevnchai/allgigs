import { motion } from 'framer-motion';
import { Compass, Calendar, Users, Utensils, Heart } from 'lucide-react';

const exploreCategories = [
  {
    title: 'Activities',
    icon: <Compass className="w-6 h-6" />,
    description: 'Discover exciting local activities and adventures'
  },
  {
    title: 'Events',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Find upcoming events in your area'
  },
  {
    title: 'Community Forums',
    icon: <Users className="w-6 h-6" />,
    description: 'Connect with your local community'
  },
  {
    title: 'Restaurants',
    icon: <Utensils className="w-6 h-6" />,
    description: 'Explore local dining options'
  },
  {
    title: "Founder's Favorites",
    icon: <Heart className="w-6 h-6" />,
    description: 'Hand-picked recommendations from our founders'
  }
];

export function ExploreSection() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-sage-800">
        Explore Your Community
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exploreCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center mb-6 text-sage-600">
              {category.icon}
            </div>
            <h3 className="text-xl font-medium mb-3 text-sage-800">
              {category.title}
            </h3>
            <p className="text-sage-600 mb-6">
              {category.description}
            </p>
            <button className="text-sage-700 font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Explore More <span>→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 