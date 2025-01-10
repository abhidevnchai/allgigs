import express from 'express';
import Booking from '../models/Booking.js';
import { auth } from '../middleware/auth.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

// Create booking
router.post('/', auth, async (req, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      user: req.user._id,
      status: 'pending'
    });
    
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get user's bookings
router.get('/', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get bookings for authenticated user
router.get('/user', authenticateToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .sort({ date: -1 })
      .populate('service', 'name');
    
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

export default router;