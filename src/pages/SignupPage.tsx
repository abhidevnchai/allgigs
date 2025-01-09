import { AuthLayout } from "../components/auth/AuthLayout";
import { SignupForm } from "../components/auth/SignupForm";

export function SignupPage() {
  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Sign up to book services and manage your appointments"
    >
      <SignupForm />
    </AuthLayout>
  );
}
