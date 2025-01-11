import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { BookingPage } from "./pages/BookingPage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { Locations } from "./components/Locations";
import { QueryForm } from "./components/QueryForm";
import { Testimonials } from "./components/Testimonials";
import { AuthProvider } from "./contexts/AuthContext";
import { Dashboard } from "./pages/Dashboard";
import { ContentSwitcher } from "./components/ContentSwitcher";
import { BlogSection } from "./components/BlogSection";
import { FAQSection } from "./components/FAQSection";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div className="min-h-screen">
          <Hero />
          <ContentSwitcher />
          <Testimonials />
          <Locations />
          <BlogSection />
          <CTASection />
          <FAQSection />
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
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <div className="min-h-screen bg-sage-50">
          <Dashboard />
        </div>
        <Footer />
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
