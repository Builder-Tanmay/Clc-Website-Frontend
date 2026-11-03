import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { services } from '../data/servicesData';
import { centres } from '../data/centresData';
import { teamMembers } from '../data/teamData';
import { reviews, statsData } from '../data/reviewsData';
import { journeySteps, processSteps } from '../data/journeyData';
import StatsCounter from '../components/ui/StatsCounter';
import ServiceCard from '../components/ui/ServiceCard';
import CentreCard from '../components/ui/CentreCard';
import TeamCard from '../components/ui/TeamCard';
import ReviewCard from '../components/ui/ReviewCard';
import JourneyCard from '../components/ui/JourneyCard';
import BookingForm from '../components/forms/BookingForm';

export default function HomePage() {
  const { openBooking, openVideo } = useModal();
  const [centreFilter, setCentreFilter] = useState('all');

  const filteredCentres =
    centreFilter === 'all'
      ? centres
      : centres.filter((c) => c.category === centreFilter);

  return (
    <main id="main">
      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-img"></div>
        </div>
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7 col-xl-8">
              <p className="hero__note">13+ years of compassionate child rehabilitation</p>
              <h1>
                <span className="w" style={{ '--i': 0 }}>Every</span>{' '}
                <span className="w" style={{ '--i': 1 }}>child</span>{' '}
                <span className="w" style={{ '--i': 2 }}>has</span>{' '}
                <span className="w" style={{ '--i': 3 }}>potential.</span>{' '}
                <span className="w" style={{ '--i': 4 }}>We</span>{' '}
                <span className="w" style={{ '--i': 5 }}>help</span>{' '}
                <span className="w" style={{ '--i': 6 }}>build</span>{' '}
                <span className="w" style={{ '--i': 7 }}>the</span>{' '}
                <span className="w" style={{ '--i': 8 }}>bridge</span>{' '}
                <span className="w" style={{ '--i': 9 }}>to</span>{' '}
                <span className="w" style={{ '--i': 10 }}>it.</span>
              </h1>
              <p className="hero__lead">
                Pediatric occupational therapy, speech and language support, sensory integration and ADHD care, delivered across Mumbai, Navi Mumbai, Thane, Nagpur and Nashik.
              </p>
              <div className="hero__actions">
                <button
                  type="button"
                  className="btn btn-clc btn-lg-clc"
                  onClick={() => openBooking()}
                >
                  Book an evaluation
                </button>
                <a
                  href="https://wa.me/919004460650?text=Hello%20CLC%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-clc-outline btn-hero-outline btn-lg-clc"
                >
                  <i className="bi bi-whatsapp"></i>Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-xl-4 d-none d-lg-block">
              <aside className="hero-panel" aria-labelledby="trustTitle">
                <h2 id="trustTitle">Why parents choose CLC</h2>
                <ul>
                  <li>
                    <i className="bi bi-people-fill" aria-hidden="true"></i>
                    <div>
                      <strong>One team, one roof</strong>
                      <span>Occupational and speech therapists work together on your child's plan.</span>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-balloon-heart-fill" aria-hidden="true"></i>
                    <div>
                      <strong>Fully equipped sensory gyms</strong>
                      <span>Swings, bolsters and fine-motor stations.</span>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-chat-heart-fill" aria-hidden="true"></i>
                    <div>
                      <strong>You stay in the loop</strong>
                      <span>A short debrief with parents after every 40-minute session.</span>
                    </div>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers / Stats */}
      <div className="stats-wrap">
        <div className="container">
          <dl className="stats">
            {statsData.map((stat, i) => (
              <div key={i}>
                <StatsCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  isFormatted={stat.isFormatted}
                />
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* About Preview */}
      <section id="about" className="section">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="about-frame">
                <img src="/assets/team/team-1.jpg" alt="The CLC therapy team at the centre" />
              </div>
            </div>
            <div className="col-lg-6 about-copy">
              <h2>Care that combines clinical skill with patience</h2>
              <p>
                We started CLC because we believe a developmental delay is not a permanent barrier. Occupational therapists, speech-language pathologists and remedial educators work together under one roof, so your child gets joined-up support instead of separate appointments.
              </p>
              <p>
                Every plan starts with a careful evaluation, uses play your child enjoys, and includes simple guidance you can follow at home.
              </p>
              <ul className="tick-list">
                <li><strong>One-on-one plans</strong> built around your child's own pace.</li>
                <li><strong>Sensory gyms</strong> with suspended swings, bolster barrels and fine-motor stations.</li>
                <li><strong>Parent debriefs</strong> after every session, so you know what we worked on.</li>
              </ul>
              <div className="mt-4">
                <Link to="/about" className="btn btn-clc-outline">
                  Read more about our approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section id="team" className="section section--white">
        <div className="container">
          <div className="section-head">
            <h2>Your child's support team</h2>
            <p>Experienced, licensed clinicians who work towards your child's everyday goals.</p>
          </div>
          <div className="row g-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <div className="section-head mb-0">
                <h2>Your first visit, step by step</h2>
                <p>Starting therapy can feel like a big step. This is what to expect, so nothing comes as a surprise.</p>
              </div>
              <div className="process-aside">
                <strong>Each session is 40 minutes</strong> and ends with a short debrief, so you always know what we worked on and what to practise at home.
              </div>
              <button
                type="button"
                className="btn btn-clc process-cta"
                onClick={() => openBooking()}
              >
                Book an evaluation
              </button>
            </div>

            <div className="col-lg-7">
              <ol className="steps">
                {processSteps.map((step) => (
                  <li key={step.step} className="is-active">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="section section--white">
        <div className="container">
          <div className="section-head">
            <h2>Watch and learn</h2>
            <p>A look inside our therapy sessions, with guidance parents can use at home.</p>
          </div>
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              <button
                type="button"
                className="video-thumb"
                onClick={() => openVideo('D1gxGckdo4c')}
                aria-label="Play video: How sensory integration regulates attention"
              >
                <img src="/assets/centre/centre-1.jpg" alt="Child Learning Centre sensory room" />
                <span className="video-thumb__play" aria-hidden="true">
                  <i className="bi bi-play-fill"></i>
                </span>
              </button>
            </div>
            <div className="col-lg-5 video-copy">
              <h3>How sensory integration helps children focus</h3>
              <p>
                See how swings and deep-pressure activities help children who feel overwhelmed by sound, touch or movement settle and pay attention.
              </p>
              <button
                type="button"
                className="btn btn-clc-outline"
                onClick={() => openVideo('D1gxGckdo4c')}
              >
                <i className="bi bi-play-circle me-2"></i>Watch the video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Therapies */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Therapies we offer</h2>
            <p>Each programme is led by a licensed practitioner and adapted to your child.</p>
          </div>
          <div className="row g-4">
            {services.map((s) => (
              <div key={s.id} className="col-12 col-sm-6 col-lg-3">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Together: Journey */}
      <section id="journey" className="section section--journey">
        <div className="container">
          <div className="text-center mb-5">
            <div className="journey-badge">
              <span className="journey-badge-dot"></span>
              <span>Growing Together</span>
            </div>
            <h2 className="journey-title">Every Child’s Journey Is Unique</h2>
            <p className="journey-subtitle">
              Every child learns and develops differently. We work alongside families to provide personalised support that nurtures each child’s strengths, development, and potential.
            </p>
          </div>

          <div className="row g-4">
            {journeySteps.map((item) => (
              <div key={item.step} className="col-12 col-sm-6 col-lg-3">
                <JourneyCard item={item} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              className="btn btn-clc px-4 py-3"
              onClick={() => openBooking()}
            >
              <i className="bi bi-calendar-check me-2"></i>Book an Evaluation
            </button>
          </div>
        </div>
      </section>

      {/* Centres */}
      <section id="centres" className="section section--white">
        <div className="container">
          <div className="section-head">
            <h2>Find a centre near you</h2>
            <p>Sensory-equipped clinics in Mumbai, Navi Mumbai, Thane, Nagpur and Nashik.</p>
          </div>
          <div className="filter-bar" role="group" aria-label="Filter centres by area">
            <button
              type="button"
              className="filter-btn"
              aria-pressed={centreFilter === 'all'}
              onClick={() => setCentreFilter('all')}
            >
              All centres
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
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="section-head">
            <h2>What parents say</h2>
            <p>Words from families whose children have made progress with CLC.</p>
          </div>
          <div className="row g-4">
            {reviews.map((rev) => (
              <div key={rev.id} className="col-md-6 col-lg-4">
                <ReviewCard review={rev} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quick Booking */}
      <section id="contact" className="section section--white">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <div className="section-head mb-0">
                <h2>Book an evaluation</h2>
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
                      Message the clinic
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
                    <span className="v">Sector 29, Nerul East, Navi Mumbai</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="form-card">
                <BookingForm idPrefix="inline" withHeading={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

