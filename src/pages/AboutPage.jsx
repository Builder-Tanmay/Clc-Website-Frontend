import React from 'react';
import { useModal } from '../context/ModalContext';
import { teamMembers } from '../data/teamData';
import TeamCard from '../components/ui/TeamCard';

export default function AboutPage() {
  const { openBooking } = useModal();

  return (
    <main id="main">
      {/* Page Hero Banner */}
      <section className="section section--white pb-0">
        <div className="container">
          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              About Child Learning Centre
            </span>
            <h1 className="h2 mb-3">Care that combines clinical skill with patience</h1>
            <p className="lead text-muted">
              Founded in 2013, CLC has helped over 6,000 children across Maharashtra unlock their natural developmental strengths in a welcoming, family-focused clinic setting.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="section pt-4">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="about-frame">
                <img
                  src="/assets/team/team-1.jpg"
                  alt="CLC multidisciplinary therapy specialists"
                />
              </div>
            </div>
            <div className="col-lg-6 about-copy">
              <h2>A joined-up, multidisciplinary approach</h2>
              <p>
                We started CLC because we believe a developmental delay is not a permanent barrier. Occupational therapists, speech-language pathologists, and remedial educators collaborate under one roof so your child receives a holistic, unified care plan rather than disconnected visits.
              </p>
              <p>
                Every treatment plan is tailored to the child's strengths and learning profile. Rather than mechanical drills, therapy is conducted through engaging purposeful play that builds authentic confidence.
              </p>
              <ul className="tick-list">
                <li>
                  <strong>One-on-one sessions</strong>: Each child receives undivided attention from qualified specialists.
                </li>
                <li>
                  <strong>Specialized sensory gyms</strong>: Clinical-grade equipment including bolster barrels, tactile paths, and vestibular swings.
                </li>
                <li>
                  <strong>Parent debriefs every session</strong>: We dedicate the final minutes of each session to review milestones and practical home strategies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Team */}
      <section id="team" className="section section--white">
        <div className="container">
          <div className="section-head">
            <h2>Our Clinical Leadership</h2>
            <p>Experienced, licensed pediatric clinicians dedicated to your child's milestones.</p>
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

      {/* Facilities & Sensory Gyms */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6 order-lg-2">
              <div className="about-frame">
                <img
                  src="/assets/centre/centre-2.jpg"
                  alt="Sensory gym with swings and therapy modules"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2>Equipped for every sensory need</h2>
              <p>
                Our centres in Nerul, Thane, Chembur, Vashi, Nagpur, and Nashik feature specialized sensory spaces designed to provide vestibular, proprioceptive, and tactile input in a safe, fun, and regulated environment.
              </p>
              <p>
                Children learn best when they feel safe and understood. Our clinics maintain a warm, non-hospital ambiance where children eagerly participate and families feel fully supported.
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-clc"
                  onClick={() => openBooking()}
                >
                  Schedule a clinic tour &amp; evaluation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

