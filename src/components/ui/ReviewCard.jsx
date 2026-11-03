import React from 'react';

export default function ReviewCard({ review }) {
  return (
    <figure className="tile review mb-0 h-100">
      <div className="review__top">
        <span className="review__stars" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <i key={i} className="bi bi-star-fill"></i>
          ))}
        </span>
        <span className="review__where">{review.centre}</span>
      </div>
      <blockquote>“{review.quote}”</blockquote>
      <figcaption>
        <strong>{review.author}</strong>
        <span>{review.meta}</span>
      </figcaption>
    </figure>
  );
}

