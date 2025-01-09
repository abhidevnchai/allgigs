import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    service: 'House Cleaning',
    text: "The best cleaning service I've ever used. Professional and thorough!",
    rating: 5
  },
  {
    name: 'Mike Peters',
    service: 'Snow Removal',
    text: 'Reliable and prompt service, especially during heavy snowfall.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-sage-800">What Our Customers Say</h2>
        <div className="grid grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-lg bg-sage-50">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="text-earth-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mb-4 text-sage-700">"{review.text}"</p>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sage-600">{review.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}