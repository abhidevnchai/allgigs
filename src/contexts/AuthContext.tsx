import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/auth";

interface User {
  _id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  signup: (data: { name: string; email: string; password: string }) => Promise<any>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .getCurrentUser()
        .then((userData: any) => {
          if (userData && '_id' in userData && 'email' in userData && 'name' in userData) {
            setUser(userData as User);
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const signup = async (data: { name: string; email: string; password: string }) => {
    const response = await auth.signup(data);
    localStorage.setItem("token", response.token);
    setUser(response.user);
    return response;
  };

  const login = async (email: string, password: string) => {
    const response = await auth.login({ email, password });
    if (response.token) {
      localStorage.setItem('token', response.token);
    }
    if (response.user && '_id' in response.user && 'email' in response.user && 'name' in response.user) {
      setUser(response.user as User);
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      signup, 
      login, 
      logout,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
