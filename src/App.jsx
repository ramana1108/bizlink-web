import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#64748B] font-sans selection:bg-[#2563EB] selection:text-white w-full max-w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />

            {/* Seamless Redirects for Legacy / Alternative Routes */}
            <Route path="/industries" element={<Navigate to="/services" replace />} />
            <Route path="/what-we-do" element={<Navigate to="/services" replace />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            <Route path="/insights" element={<Navigate to="/case-studies" replace />} />
            <Route path="/sustainability" element={<Navigate to="/about" replace />} />
            <Route path="/investor-relations" element={<Navigate to="/about" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
