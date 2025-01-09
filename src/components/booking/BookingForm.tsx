import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ServiceSelect } from "./ServiceSelect";
import { FormInput } from "./FormInput";
import { useAuth } from "../../contexts/AuthContext";
import { bookings, BookingData } from "../../lib/bookings";
import { API_URL } from "../../config";

interface Service {
  _id: string;
  name: string;
  title: string;
}

interface BookingFormProps {
  initialService?: string;
}

export function BookingForm({ initialService = "" }: BookingFormProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  {
    console.log(user);
  }

  const [formData, setFormData] = useState<BookingData>({
    service: initialService,
    houseType: "",
    date: "",
    time: "",
    address: "",
    additionalNotes: "",
    user: user?._id || ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await bookings.create({
        ...formData,
        user: user?._id || ""
      });
      setSuccess(true);
      setFormData({
        service: "",
        houseType: "",
        date: "",
        time: "",
        address: "",
        additionalNotes: "",
        user: user?._id || ""
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit booking");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="max-w-xl mx-auto bg-sage-700 shadow-xl rounded-lg p-8 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold text-white text-center">
        Book a Service
      </h2>
      <p className="text-sm text-white text-center">
        Fill out the form below to schedule your service.
      </p>

      {error && (
        <motion.div
          className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.div>
      )}

      {success && (
        <motion.div
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Booking submitted successfully!
        </motion.div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div variants={fieldVariants}>
          <ServiceSelect value={formData.service} onChange={handleChange} services={services} />
        </motion.div>

        <motion.div variants={fieldVariants}>
          <FormInput
            label="House Type"
            name="houseType"
            type="select"
            value={formData.houseType}
            onChange={handleChange}
            options={[
              { value: "apartment", label: "Apartment" },
              { value: "house", label: "House" },
              { value: "condo", label: "Condo" },
              { value: "office", label: "Office" },
            ]}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fieldVariants}
        >
          <FormInput
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
          <FormInput
            label="Preferred Time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
          />
        </motion.div>

        <motion.div variants={fieldVariants}>
          <FormInput
            label="Service Address"
            name="address"
            type="textarea"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
          />
        </motion.div>

        <motion.div variants={fieldVariants}>
          <FormInput
            label="Additional Notes"
            name="additionalNotes"
            type="textarea"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any special instructions or requirements?"
          />
        </motion.div>
        <motion.button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Submitting..." : "Book Service"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
