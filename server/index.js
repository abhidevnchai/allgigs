import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth.js';
import { servicesRouter } from './routes/services.js';
import { bookingsRouter } from './routes/bookings.js';
import seedServices from './seeds/services.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Update CORS configuration to allow multiple origins
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174'
  ],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/services', servicesRouter);
app.use('/api/bookings', bookingsRouter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    seedServices();
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
