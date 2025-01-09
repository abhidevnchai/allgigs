import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
    alert('Thank you for your query! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-sage-800">Have a Question?</h2>
          <p className="text-center text-sage-600 mb-8">Send us your query and we'll get back to you shortly</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-sage-200 focus:ring-2 focus:ring-earth-400 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-sage-200 focus:ring-2 focus:ring-earth-400 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-sage-700 mb-1">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-sage-200 focus:ring-2 focus:ring-earth-400 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="cleaning">House Cleaning</option>
                <option value="snow">Snow Removal</option>
                <option value="car">Car Services</option>
                <option value="moving">Moving Services</option>
                <option value="party">Post-Party Cleanup</option>
                <option value="decoration">Decoration</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-sage-200 focus:ring-2 focus:ring-earth-400 focus:border-transparent"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-earth-400 text-white px-8 py-3 rounded-lg hover:bg-earth-500 transition-colors inline-flex items-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}