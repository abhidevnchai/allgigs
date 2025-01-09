import { ArrowRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (!user) {
      navigate("/signup", { state: { selectedService: title } });
    } else {
      navigate("/booking", { state: { selectedService: title } });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-sage-100">
      <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-sage-800">{title}</h3>
      <p className="text-sage-600 mb-6 font-light">{description}</p>
      <button
        onClick={handleBookNow}
        className="text-sage-700 font-medium flex items-center gap-1 hover:gap-2 transition-all group"
      >
        Book Now <ArrowRight size={18} className="group-hover:text-earth-600" />
      </button>
    </div>
  );
}
