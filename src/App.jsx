import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';

import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileActionBar from './components/layout/MobileActionBar';

import BookingModal from './components/common/BookingModal';
import VideoModal from './components/common/VideoModal';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollProgress from './components/common/ScrollProgress';
import ToTopButton from './components/common/ToTopButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CentresPage from './pages/CentresPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ModalProvider>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <ScrollProgress />
        <ScrollToTop />
        <TopBar />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/therapies" element={<ServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/centres" element={<CentresPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
        <MobileActionBar />
        <BookingModal />
        <VideoModal />
        <ToTopButton />
      </ModalProvider>
    </Router>
  );
}

