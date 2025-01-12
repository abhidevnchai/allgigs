import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { BookingForm } from "../components/booking/BookingForm";
import { Calendar, Clock, MapPin, Info } from 'lucide-react';
import { cn } from "../lib/utils";

export function BookingPage() {
  const { user } = useAuth();
  const location = useLocation();
  const selectedService = location.state?.selectedService;

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-900 via-earth-800 to-sage-800 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-sage-400/10 shadow-xl">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-earth-200 to-sage-200 mb-4">
              Book Your Service
            </h1>
            <p className="text-sage-200 text-lg">
              Complete your booking details below. We'll make sure to match you with the best service provider.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-earth-500/10 to-sage-500/10 blur-3xl" />
        </div>

        {/* Service Summary */}
        {selectedService && (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-sage-400/10 shadow-xl">
            <h2 className="text-2xl font-semibold text-sage-100 mb-6">
              Selected Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Calendar, label: selectedService.name },
                { icon: Clock, label: `Duration: ${selectedService.duration}` },
                { icon: MapPin, label: `Location: ${selectedService.location || 'To be confirmed'}` }
              ].map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl",
                    "bg-gradient-to-br from-white/5 to-white/[0.02] border border-sage-400/10",
                    "transition-all duration-300 hover:scale-105 hover:from-white/10 hover:to-white/5",
                    "hover:border-earth-400/20"
                  )}
                >
                  <item.icon className="w-5 h-5 text-earth-400" />
                  <span className="text-sage-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Form Container */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-sage-400/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <BookingForm initialService={selectedService} />
            </div>

            {/* Info Section */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-sage-800/50 to-earth-900/50 rounded-xl p-6 border border-sage-400/5">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-earth-400" />
                  <h3 className="text-lg font-semibold text-sage-100">
                    Booking Information
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { label: "Confirmation", text: "You'll receive instant confirmation via email" },
                    { label: "Payment", text: "Secure payment processed after service completion" },
                    { label: "Cancellation", text: "Free cancellation up to 24 hours before the service" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <span className="w-2 h-2 mt-2 rounded-full bg-earth-400 group-hover:scale-125 transition-transform" />
                      <div>
                        <span className="block text-earth-300 font-medium mb-1">{item.label}</span>
                        <span className="text-sage-300 text-sm">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}