import React from 'react';
import { reviews, statsData } from '../data/reviewsData';
import ReviewCard from '../components/ui/ReviewCard';
import StatsCounter from '../components/ui/StatsCounter';
import { useModal } from '../context/ModalContext';

export default function ReviewsPage() {
  const { openBooking } = useModal();

  return (
    <main id="main">
      {/* Header Banner */}
      <section className="section section--white pb-0">
        <div className="container">
          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              Parent Testimonials
            </span>
            <h1 className="h2 mb-3">Stories of growth, confidence, and milestones</h1>
            <p className="lead text-muted">
              Read how personalized pediatric therapy and parent collaboration have helped children flourish at home and in school.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
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

      {/* Reviews Grid */}
      <section className="section pt-4">
        <div className="container">
          <div className="row g-4">
            {reviews.map((rev) => (
              <div key={rev.id} className="col-md-6 col-lg-4">
                <ReviewCard review={rev} />
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-4 bg-white border border-light-subtle shadow-sm text-center">
            <div className="mb-3">
              <span className="review__stars fs-4" aria-label="5 stars">
                <i className="bi bi-star-fill text-warning me-1"></i>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </span>
            </div>
            <h3 className="h5 mb-2">Rated 4.8 / 5 Across Maharashtra on Google</h3>
            <p className="text-muted mb-4 max-w-600 mx-auto">
              Our greatest satisfaction is seeing children laugh, communicate clearly, and take confident steps in their everyday routines.
            </p>
            <button
              type="button"
              className="btn btn-clc"
              onClick={() => openBooking()}
            >
              Start your child's journey with us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

