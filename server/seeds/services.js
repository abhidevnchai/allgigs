import { Service } from '../models/Service.js';

const services = [
  {
    title: 'Snow Removal',
    name: 'snow-removal',
    description: 'Professional snow removal service for your property',
    price: 50,
    category: 'home'
  },
  {
    title: 'Chauffeur Service',
    name: 'chauffeur',
    description: 'Professional driving service for any occasion',
    price: 75,
    category: 'personal'
  },
  {
    title: 'Party Helper',
    name: 'party-helper',
    description: 'Assistance with party setup, service, and coordination',
    price: 45,
    category: 'events'
  },
  {
    title: 'After Party Cleaning',
    name: 'after-party-cleaning',
    description: 'Complete cleanup service after your event',
    price: 60,
    category: 'events'
  },
  {
    title: 'Car Repair',
    name: 'car-repair',
    description: 'Professional automotive repair service',
    price: 80,
    category: 'auto'
  },
  {
    title: 'House Cleaning',
    name: 'house-cleaning',
    description: 'Thorough house cleaning service',
    price: 55,
    category: 'home'
  },
  {
    title: 'Movers & Helpers',
    name: 'movers-helpers',
    description: 'Professional moving and heavy lifting assistance',
    price: 65,
    category: 'home'
  }
];

const seedServices = async () => {
  try {
    await Service.deleteMany({});
    await Service.insertMany(services);
    console.log('Services seeded successfully');
  } catch (error) {
    console.error('Error seeding services:', error);
  }
};

export default seedServices;