import { API_URL } from "../config";

interface User {
  _id: string;
  email: string;
  fullName: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export const auth = {
  async signup(data: SignupData) {
    const response = await fetch(`${API_URL}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  },

  async login(credentials: { email: string; password: string }) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await response.json();
    console.log('Login response:', data);
    localStorage.setItem('token', data.token);
    return data;
  },

  async getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      localStorage.removeItem('token');
      throw new Error('Failed to get current user');
    }

    return response.json();
  },

  logout() {
    localStorage.removeItem("token");
  }
};
