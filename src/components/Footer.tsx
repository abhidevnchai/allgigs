export function Footer() {
  return (
    <footer id="contact" className="bg-earth-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-light mb-4 tracking-wide">ALL GIGS</h3>
            <p className="text-earth-200 font-light">
              Your trusted platform for professional services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4 tracking-wide">
              Contact Us
            </h3>
            <p className="text-earth-200 font-light">
              Email: contact@allgigs.com
              <br />
              Phone: (555) 123-4567
              <br />
              Available 24/7
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4 tracking-wide">Follow Us</h3>
            <div className="space-x-4">
              <a
                href="#"
                className="text-earth-200 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-earth-200 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-earth-200 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-earth-800 mt-12 pt-8 text-center text-earth-300">
          <p className="font-light">
            &copy; {new Date().getFullYear()} ALL GIGS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
