import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AuthInput } from "./AuthInput";
import { AuthButton } from "./AuthButton";

export function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      const from = location.state?.from?.pathname || "/booking";
      navigate(from);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      <AuthInput
        type="email"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <AuthInput
        type="password"
        name="password"
        label="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <div className="space-y-4">
        <AuthButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </AuthButton>

        <AuthButton variant="secondary" onClick={() => navigate("/signup")}>
          Don't have an account? Sign up
        </AuthButton>
      </div>
    </form>
  );
}
