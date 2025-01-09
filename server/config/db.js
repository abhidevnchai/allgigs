import mongoose from 'mongoose';

export const connectDB = async (uri) => {
  console.log('Attempting to connect to MongoDB with URI:', uri); // Debugging log
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};
