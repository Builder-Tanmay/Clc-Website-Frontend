import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Link to="/" className="brand mb-3">
              <img src="/assets/logo/clc-logo.png" alt="CLC logo" height="40" />
              <span className="brand__name">
                CLC<span>.</span>
              </span>
            </Link>
            <p className="pe-lg-4 mb-0">
              Child Learning Centre provides personalised, evidence-based developmental and pediatric therapy across Maharashtra, since 2013.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h2>Explore</h2>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about#team">Our Team</Link>
              </li>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/centres">Centres</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h2>Therapies</h2>
            <ul className="footer-links">
              <li>
                <Link to="/therapies">Occupational therapy</Link>
              </li>
              <li>
                <Link to="/therapies">Speech and language</Link>
              </li>
              <li>
                <Link to="/therapies">Sensory integration</Link>
              </li>
              <li>
                <Link to="/therapies">ADHD and attention</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 footer-contact">
            <h2>Contact</h2>
            <p>
              <i className="bi bi-geo-alt" aria-hidden="true"></i>
              <span>Head office: Sector 29, Nerul East, Navi Mumbai</span>
            </p>
            <p>
              <i className="bi bi-telephone" aria-hidden="true"></i>
              <a href="tel:+919004460650">+91 90044 60650</a>
            </p>
            <p>
              <i className="bi bi-whatsapp" aria-hidden="true"></i>
              <a
                href="https://wa.me/919004460650"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us on WhatsApp
              </a>
            </p>
            <p>
              <i className="bi bi-clock" aria-hidden="true"></i>
              <span>Mon – Sat, 9:00 AM – 7:30 PM</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Child Learning Centre. All rights reserved.</span>
          <span>Your child's information is kept confidential.</span>
        </div>
      </div>
    </footer>
  );
}

