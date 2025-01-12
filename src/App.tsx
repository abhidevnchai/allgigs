import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import { Dashboard } from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ServicesPage } from './pages/ServicesPage';

// Components
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero';
import { ContentSwitcher } from './components/ContentSwitcher';
import { Footer } from './components/Footer';
import { QueryForm } from './components/QueryForm';
import { Testimonials } from './components/Testimonials';
import { Locations } from './components/Locations';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';

export function App() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route 
            path="/services" 
            element={
              <>
                <Navbar />
                <div className="min-h-screen bg-sage-50">
                  <ServicesPage />
                </div>
                <Footer />
              </>
            } 
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <ContentSwitcher onTabChange={setActiveTab} activeTab={activeTab} />
                {activeTab === 'services' && (
                  <>
                  <CTASection/>
                    <Testimonials />
                    <Locations />
                    <BlogSection />
                    <FAQSection />
                  </>
                )}
                <QueryForm />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
