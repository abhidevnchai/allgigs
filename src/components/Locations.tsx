import { MapPin } from 'lucide-react';

const cities = ['KWC', 'Guelph', 'Hamilton', 'Brantford'];

export function Locations() {
  return (
    <section className="py-20 bg-sage-800 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available in Your Area</h2>
          <p className="text-sage-100">
            We provide services in major cities across the region, but are not limited.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex items-center gap-2 justify-center text-center"
            >
              <MapPin size={20} className="text-earth-400" />
              <span>{city}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8 text-sm" style={{ color: '#c2a83e' }}>
          * Call us, we'll help you out. *
        </div>
      </div>
    </section>
  );
}
