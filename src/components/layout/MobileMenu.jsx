import React from 'react';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { openBooking } = useModal();

  const handleBookingClick = () => {
    onClose();
    openBooking();
  };

  return (
    <>
      <div
        className={`offcanvas offcanvas-end mobile-menu ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header">
          <h2 className="h5 mb-0" id="mobileMenuLabel">Menu</h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close menu"
            onClick={onClose}
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <nav aria-label="Mobile">
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/"
              onClick={onClose}
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/about"
              onClick={onClose}
            >
              About &amp; Team
            </NavLink>
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/therapies"
              onClick={onClose}
            >
              Therapies
            </NavLink>
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/how-it-works"
              onClick={onClose}
            >
              How It Works
            </NavLink>
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/centres"
              onClick={onClose}
            >
              Centres
            </NavLink>
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/reviews"
              onClick={onClose}
            >
              Reviews
            </NavLink>
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/contact"
              onClick={onClose}
            >
              Contact
            </NavLink>
          </nav>
          <div className="mt-auto pt-4 d-grid gap-2">
            <button
              type="button"
              className="btn btn-clc"
              onClick={handleBookingClick}
            >
              Book a consultation
            </button>
            <a href="tel:+919004460650" className="btn btn-clc-outline">
              <i className="bi bi-telephone"></i>+91 90044 60650
            </a>
          </div>
        </div>
      </div>
      {isOpen && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}
    </>
  );
}

