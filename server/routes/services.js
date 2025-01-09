import express from 'express';
import { Service } from '../models/Service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category, sort } = req.query;
    let query = {};
    
    if (category) {
      query.category = category;
    }
    
    let services = await Service.find(query);
    
    if (sort === 'price') {
      services.sort((a, b) => a.price - b.price);
    }
    
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new service
router.post('/', async (req, res) => {
  const service = new Service({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  });

  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const servicesRouter = router;