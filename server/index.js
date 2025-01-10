import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth.js';
import { servicesRouter } from './routes/services.js';
import bookingsRouter from './routes/bookings.js';
import seedServices from './seeds/services.js';
import nodemailer from 'nodemailer';
import cookieParser from 'cookie-parser';

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
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/services', servicesRouter);
app.use('/api/bookings', bookingsRouter);

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message, service } = req.body;
  
  try {
    console.log('Attempting to send email with data:', { name, email, service, message });
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Query from ${name} about ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h2>New Query from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed email error:', {
      error: error.message,
      stack: error.stack,
      code: error.code
    });
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

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
