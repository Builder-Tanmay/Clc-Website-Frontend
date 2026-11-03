import React from 'react';
import BookingForm from '../components/forms/BookingForm';

export default function ContactPage() {
  return (
    <main id="main">
      {/* Header Banner */}
      <section className="section section--white pb-0">
        <div className="container">
          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              Get In Touch
            </span>
            <h1 className="h2 mb-3">Book an evaluation or consultation</h1>
            <p className="lead text-muted">
              Have questions about your child’s development? Speak with our team or fill out the short form to arrange a clinic visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact and Form Section */}
      <section className="section pt-4">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <div className="section-head mb-0">
                <h2>We're here to help</h2>
                <p>
                  Tell us a little about your child. We will message you on WhatsApp to confirm a time that suits your family.
                </p>
              </div>

              <ul className="contact-list">
                <li>
                  <span className="ico">
                    <i className="bi bi-telephone" aria-hidden="true"></i>
                  </span>
                  <div>
                    <strong>Call us</strong>
                    <a href="tel:+919004460650">+91 90044 60650</a>
                  </div>
                </li>
                <li>
                  <span className="ico">
                    <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  </span>
                  <div>
                    <strong>WhatsApp</strong>
                    <a
                      href="https://wa.me/919004460650"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message the clinic directly
                    </a>
                  </div>
                </li>
                <li>
                  <span className="ico">
                    <i className="bi bi-clock" aria-hidden="true"></i>
                  </span>
                  <div>
                    <strong>Clinic hours</strong>
                    <span className="v">Monday to Saturday, 9:00 AM – 7:30 PM</span>
                  </div>
                </li>
                <li>
                  <span className="ico">
                    <i className="bi bi-geo-alt" aria-hidden="true"></i>
                  </span>
                  <div>
                    <strong>Head office</strong>
                    <span className="v">
                      Shop No. 4 &amp; 5, Beside CSB Bank, Sai Sthan Apt, Sector 29, Nerul East, Navi Mumbai - 400706
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-7">
              <div className="form-card">
                <BookingForm idPrefix="contact-page" withHeading={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

