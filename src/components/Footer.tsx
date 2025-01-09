import { Facebook, Twitter, Instagram, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sage-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AllGigs</h3>
            <p className="text-sage-100">Your trusted partner for all services</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sage-100">
              <li><a href="#services" className="hover:text-earth-400">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-earth-400">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-earth-400">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sage-100">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>1-800-ALLGIGS</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@allgigs.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-earth-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-earth-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-earth-400"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-100">
          <p>&copy; 2024 AllGigs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}