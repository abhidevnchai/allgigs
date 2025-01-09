export function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-[600px]"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-6xl font-light mb-6 tracking-wide">ALL GIGS</h1>
          <p className="text-xl mb-8 max-w-2xl font-light leading-relaxed">
            Your one-stop platform for all service needs. From snow removal to
            moving help, we've got you covered with trusted professionals.
          </p>
          <a
            href="#services"
            className="inline-block bg-sage-600 text-white px-8 py-3 rounded-full text-lg font-light tracking-wide hover:bg-sage-700 transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}
