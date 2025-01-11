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
    <section className="py-20 bg-sage-900">

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-earth-300">
            Tips & Insights
          </h2>
          <p className="text-sage-100 max-w-2xl mx-auto">
            Discover helpful tips, local insights, and community updates to enhance your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-earth-300 text-sm">{post.category}</span>
                  <span className="text-sage-100 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sage-50">
                  {post.title}
                </h3>
                <p className="text-sage-200 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-earth-300 flex items-center gap-2 hover:gap-3 transition-all">
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