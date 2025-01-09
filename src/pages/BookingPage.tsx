import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { BookingForm } from "../components/booking/BookingForm";

export function BookingPage() {
  const { user } = useAuth();
  const location = useLocation();
  const selectedService = location.state?.selectedService;

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className="pt-24 pb-16 px-4 bg-sage-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-8 text-sage-800">Book Service</h1>
        <BookingForm initialService={selectedService} />
      </div>
    </div>
  );
}
