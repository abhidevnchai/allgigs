
const steps = [
  { number: '01', title: 'Book Service', desc: 'Choose your service and preferred time' },
  { number: '02', title: 'Get Matched', desc: 'We assign the best professional for your need' },
  { number: '03', title: 'Job Done', desc: 'Sit back while we handle everything' },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-sage-100" id="how-it-works">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-sage-800">How It Works</h2>
        <div className="grid grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-earth-400 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sage-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}