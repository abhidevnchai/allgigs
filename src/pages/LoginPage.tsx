import { AuthLayout } from "../components/auth/AuthLayout";
import { LoginForm } from "../components/auth/LoginForm";

export function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to your account to manage your bookings"
    >
      <LoginForm />
    </AuthLayout>
  );
}
