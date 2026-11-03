import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function MobileActionBar() {
  const { openBooking } = useModal();

  return (
    <nav className="action-bar d-xl-none" aria-label="Quick actions">
      <a href="tel:+919004460650">
        <i className="bi bi-telephone-fill" aria-hidden="true"></i>
        <span>Call</span>
      </a>
      <a
        href="https://wa.me/919004460650?text=Hello%20CLC%20Team,%20I%20would%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        className="is-primary"
        onClick={() => openBooking()}
      >
        <i className="bi bi-calendar-check-fill" aria-hidden="true"></i>
        <span>Book</span>
      </button>
    </nav>
  );
}

