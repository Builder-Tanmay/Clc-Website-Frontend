import React from 'react';
import { useModal } from '../context/ModalContext';
import { processSteps, journeySteps } from '../data/journeyData';
import JourneyCard from '../components/ui/JourneyCard';

export default function HowItWorksPage() {
  const { openBooking, openVideo } = useModal();

  return (
    <main id="main">
      {/* Page Header */}
      <section className="section section--white pb-0">
        <div className="container">
          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              The Journey With CLC
            </span>
            <h1 className="h2 mb-3">How our evaluation and therapy sessions work</h1>
            <p className="lead text-muted">
              Starting therapy can feel like a big step. We make the experience warm, transparent, and collaborative from day one.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Evaluation Steps */}
      <section className="section pt-4">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-5">
              <div className="section-head mb-0">
                <h2>Your first visit, step by step</h2>
                <p>
                  Here is what to expect so your family feels completely comfortable and prepared.
                </p>
              </div>
              <div className="process-aside my-4">
                <strong>Every therapy session is 40 minutes</strong> and concludes with a parent debrief, ensuring you always know what we worked on and what to practice at home.
              </div>
              <button
                type="button"
                className="btn btn-clc"
                onClick={() => openBooking()}
              >
                Book your child's evaluation
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

      {/* Growing Together: Journey Framework */}
      <section className="section section--journey">
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

      {/* Video Demonstration */}
      <section className="section section--white">
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
    </main>
  );
}

