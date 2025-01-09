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
    const response = await fetch(`${API_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    console.log(data);

    if (!response.ok) {
      throw new Error("Failed to create booking");
    }

    return response.json();
  },
};
