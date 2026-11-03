import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header sticky-top ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label="Child Learning Centre, home">
            <img src="/assets/logo/clc-logo.png" alt="Child Learning Centre logo" height="44" />
            <span className="brand__text">
              <span className="brand__name">
                CLC<span>.</span>
              </span>
              <span className="brand__tag d-none d-sm-block">Pediatric Development</span>
            </span>
          </Link>

          <nav className="site-nav d-none d-xl-flex" aria-label="Main">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              About
            </NavLink>
            <NavLink
              to="/therapies"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Therapies
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/centres"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Centres
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Reviews
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Contact
            </NavLink>
          </nav>

          <div className="header-actions">
            <a
              href="tel:+919004460650"
              className="btn btn-clc-outline d-none d-xxl-inline-flex"
            >
              <i className="bi bi-telephone"></i>Call us
            </a>
            <button
              type="button"
              className="btn btn-clc d-none d-sm-inline-flex"
              onClick={() => openBooking()}
            >
              Book a consultation
            </button>
            <button
              type="button"
              className="menu-toggle d-xl-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <i className="bi bi-list" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

