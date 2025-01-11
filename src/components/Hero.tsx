import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-sage-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your One-Stop Solution for
        </motion.h1>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-sage-50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Local Services & Experiences
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-nyanza/90 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From home services to local discoveries, we've got everything you need
          in one place. Book trusted services and explore the best your
          community has to offer.
        </motion.p>
      </div>
    </div>
  );
}
