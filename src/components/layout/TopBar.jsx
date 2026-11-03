import React from 'react';

export default function TopBar() {
  return (
    <div className="topbar d-none d-md-block">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
        <div>
          <span className="me-3">
            <i className="bi bi-clock"></i>Mon – Sat, 9:00 AM – 7:30 PM
          </span>
          <span className="d-none d-lg-inline">
            <i className="bi bi-geo-alt-fill"></i>Centres in Mumbai, Navi Mumbai, Thane, Nagpur &amp; Nashik
          </span>
        </div>
        <div>
          <a href="tel:+919004460650" className="me-3">
            <i className="bi bi-telephone"></i>+91 90044 60650
          </a>
          <a href="https://wa.me/919004460650" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

