import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AuthInput } from "./AuthInput";
import { AuthButton } from "./AuthButton";

export function SignupForm() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
      await signup(formData);
      navigate("/booking");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
      console.log(err);
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
        type="text"
        name="name"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

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
          {loading ? "Creating Account..." : "Create Account"}
        </AuthButton>

        <AuthButton variant="secondary" onClick={() => navigate("/login")}>
          Already have an account? Log in
        </AuthButton>
      </div>
    </form>
  );
}
