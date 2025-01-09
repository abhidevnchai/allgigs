
import { MapPin } from 'lucide-react';

const cities = ['New York', 'Boston', 'Philadelphia', 'Washington DC'];

export function Locations() {
  return (
    <section className="py-20 bg-sage-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available in Your Area</h2>
          <p className="text-sage-100">We provide services in major cities across the region</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center gap-2 justify-center">
              <MapPin size={20} className="text-earth-400" />
              <span>{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}