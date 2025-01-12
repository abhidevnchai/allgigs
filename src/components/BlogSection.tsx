import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Essential Home Maintenance Tips for Every Season",
    excerpt: "Keep your home in top condition year-round with these maintenance tips...",
    category: "Home Care",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop"
  },
  {
    title: "How to Prepare Your Garden for Spring",
    excerpt: "Get your garden ready for the growing season with our expert advice...",
    category: "Gardening",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3"
  },
  {
    title: "Top 10 Local Events This Month",
    excerpt: "Don't miss out on these exciting community events happening near you...",
    category: "Local Events",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop"
  }
];

export function BlogSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-sage-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-earth-300">
            Tips & Insights
          </h2>
          <p className="text-sage-100 max-w-2xl mx-auto text-sm sm:text-base">
            Discover helpful tips, local insights, and community updates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-sage-900/90 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-earth-300 text-xs sm:text-sm">{post.category}</span>
                  <span className="text-sage-100 text-xs sm:text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-sage-50 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sage-200 mb-4 text-sm sm:text-base line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-earth-300 flex items-center gap-2 text-sm sm:text-base hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 