
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-sage-100">
      <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-sage-800">{title}</h3>
      <p className="text-sage-600 mb-6 font-light">{description}</p>
    </div>
  );
}
