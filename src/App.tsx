import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { BookingPage } from "./pages/BookingPage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { Locations } from "./components/Locations";
import { QueryForm } from "./components/QueryForm";
import { Testimonials } from "./components/Testimonials";
import { AuthProvider } from "./contexts/AuthContext";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div className="min-h-screen bg-sage-50">
          <Hero />
          <HowItWorks />
          <ServicesSection />
          <Testimonials />
          <Locations />
          <CTASection />
          <QueryForm />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/booking",
    element: (
      <>
        <Navbar />
        <div className="min-h-screen bg-sage-50">
          <BookingPage />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <div className="min-h-screen bg-sage-50">
          <SignupPage />
        </div>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <div className="min-h-screen bg-sage-50">
          <LoginPage />
        </div>
      </>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
