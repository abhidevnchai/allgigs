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

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data;
  },

  async getCurrentUser(): Promise<User> {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to get user");
    }

    return response.json();
  },

  logout() {
    localStorage.removeItem("token");
  }
};
