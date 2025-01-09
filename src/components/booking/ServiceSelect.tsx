import { Service } from "../../types/service";

interface ServiceSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  services: Service[];
}

export function ServiceSelect({ value, onChange, services }: ServiceSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white">
        Select Service
      </label>
      <select
        name="service"
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border-sage-200 shadow-sm focus:border-sage-300 focus:ring focus:ring-sage-200 focus:ring-opacity-50"
        required
      >
        <option value="">Select a service...</option>
        {services.map((service) => (
          <option key={service.title} value={service.title}>
            {service.title}
          </option>
        ))}
      </select>
    </div>
  );
}
