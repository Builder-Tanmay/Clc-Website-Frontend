import React, { useState } from 'react';
import { centres } from '../data/centresData';
import CentreCard from '../components/ui/CentreCard';
import { useModal } from '../context/ModalContext';

export default function CentresPage() {
  const [centreFilter, setCentreFilter] = useState('all');
  const { openBooking } = useModal();

  const filteredCentres =
    centreFilter === 'all'
      ? centres
      : centres.filter((c) => c.category === centreFilter);

  return (
    <main id="main">
      {/* Header Banner */}
      <section className="section section--white pb-0">
        <div className="container">
          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              Our Locations Across Maharashtra
            </span>
            <h1 className="h2 mb-3">Find a Child Learning Centre near you</h1>
            <p className="lead text-muted">
              Fully equipped clinical facilities featuring sensory gyms and child-friendly therapy rooms across Mumbai, Navi Mumbai, Thane, Nagpur, and Nashik.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="section pt-4">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter centres by area">
            <button
              type="button"
              className="filter-btn"
              aria-pressed={centreFilter === 'all'}
              onClick={() => setCentreFilter('all')}
            >
              All centres ({centres.length})
            </button>
            <button
              type="button"
              className="filter-btn"
              aria-pressed={centreFilter === 'Navi Mumbai'}
              onClick={() => setCentreFilter('Navi Mumbai')}
            >
              Navi Mumbai
            </button>
            <button
              type="button"
              className="filter-btn"
              aria-pressed={centreFilter === 'Mumbai / Thane'}
              onClick={() => setCentreFilter('Mumbai / Thane')}
            >
              Mumbai &amp; Thane
            </button>
            <button
              type="button"
              className="filter-btn"
              aria-pressed={centreFilter === 'Other'}
              onClick={() => setCentreFilter('Other')}
            >
              Nagpur &amp; Nashik
            </button>
          </div>

          <div className="row g-4" aria-live="polite">
            {filteredCentres.map((centre, i) => (
              <CentreCard key={centre.id} centre={centre} delay={i * 70} />
            ))}
          </div>

          <div className="mt-5 p-4 rounded-4 bg-white border border-light-subtle shadow-sm text-center">
            <h3 className="h5 mb-2">Not sure which clinic is closest to you?</h3>
            <p className="text-muted mb-3">
              Give us a call or send a WhatsApp message. Our patient coordinator will assist you in selecting the ideal location and schedule.
            </p>
            <button
              type="button"
              className="btn btn-clc"
              onClick={() => openBooking()}
            >
              <i className="bi bi-geo-alt me-2"></i>Book an Appointment at Nearest Centre
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

