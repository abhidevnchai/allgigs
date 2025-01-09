import { ServiceCard } from "./ServiceCard";
import { services } from "../data/services";

export function ServicesSection() {
  return (
    <div id="services" className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-sage-800">
        Our Services
      </h2>
      <p className="text-center text-sage-600 mb-16 max-w-2xl mx-auto font-medium">
        Discover our comprehensive range of professional services designed to
        make your life easier
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
