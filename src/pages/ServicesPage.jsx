import React from 'react';
import { useModal } from '../context/ModalContext';
import { services } from '../data/servicesData';

export default function ServicesPage() {
  const { openBooking } = useModal();

  return (
    <main id="main">
      {/* Header Banner */}
      <section className="section section--white pb-0">
        <div className="container">
          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              Clinical Programs &amp; Therapies
            </span>
            <h1 className="h2 mb-3">Evidence-based pediatric therapies tailored to your child</h1>
            <p className="lead text-muted">
              Each programme is led by certified, experienced clinicians who adapt exercises to your child’s unique rhythm, goals, and sensory profile.
            </p>
          </div>
        </div>
      </section>

      {/* Therapy Detailed Breakdown */}
      <section className="section pt-4">
        <div className="container">
          <div className="row g-5">
            {services.map((service, index) => (
              <div key={service.id} className="col-12">
                <div className="tile p-3 p-md-4">
                  <div className="row align-items-center g-4">
                    <div className={`col-lg-5 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                      <div className="about-frame" style={{ aspectRatio: '16/11' }}>
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                    </div>
                    <div className={`col-lg-7 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                      <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill fw-bold mb-3 d-inline-block">
                        {service.concern}
                      </span>
                      <h2 className="h3 mb-3">{service.title}</h2>
                      <p className="text-muted mb-3 fs-5">{service.desc}</p>

                      <div className="mb-3">
                        <strong className="d-block text-dark mb-1">Who is this for?</strong>
                        <p className="text-muted mb-0">{service.whoIsItFor}</p>
                      </div>

                      {service.benefits && (
                        <div className="mb-4">
                          <strong className="d-block text-dark mb-2">Core Focus Areas:</strong>
                          <ul className="tick-list mt-0 mb-0">
                            {service.benefits.map((b, i) => (
                              <li key={i} className="mb-2">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="d-flex flex-wrap gap-3 pt-2">
                        <button
                          type="button"
                          className="btn btn-clc"
                          onClick={() => openBooking(service.concern)}
                        >
                          <i className="bi bi-calendar-check me-2"></i>
                          Inquire about {service.title}
                        </button>
                        <a
                          href={`https://wa.me/919004460650?text=${encodeURIComponent(
                            `Hello CLC Team, I am interested in inquiring about ${service.title}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-clc-outline"
                        >
                          <i className="bi bi-whatsapp me-2"></i>Ask on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Session Details Banner */}
      <section className="section section--white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="process-aside py-4 px-4">
                <h3 className="h4 mb-2">Need guidance on which therapy is right?</h3>
                <p className="text-muted mb-3">
                  Every child develops on their own timeline. During your initial evaluation, our multidisciplinary team assesses your child across motor, speech, and sensory domains to suggest the ideal schedule.
                </p>
                <button
                  type="button"
                  className="btn btn-clc"
                  onClick={() => openBooking('General Screening')}
                >
                  Book a comprehensive evaluation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

