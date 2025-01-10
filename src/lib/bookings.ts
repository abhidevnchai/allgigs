import { API_URL } from "../config";

export interface BookingData {
  service: string;
  houseType: string;
  date: string;
  time: string;
  address: string;
  additionalNotes: string;
  user: string;
}

export const bookings = {
  async create(data: BookingData) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create booking');
    }

    return response.json();
  },

  async getUserBookings() {
    const token = localStorage.getItem('token');
    console.log('Using token:', token);

    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/api/bookings/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    console.log('Bookings response status:', response.status);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch bookings');
    }

    return response.json();
  }
};
