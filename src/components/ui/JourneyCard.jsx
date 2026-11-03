import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function JourneyCard({ item }) {
  const { openBooking } = useModal();

  return (
    <div
      className="journey-card"
      onClick={() => openBooking()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          openBooking();
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="journey-notch"></div>
      <div>
        <div className="journey-card-top">
          <div className={`journey-icon-wrap journey-icon-wrap--${item.modifier}`}>
            <i className={`bi ${item.icon}`}></i>
          </div>
          <span className="journey-step-num">{item.step}</span>
        </div>
        <h3 className="journey-step-h3">{item.title}</h3>
        <p className="journey-step-desc">{item.desc}</p>
      </div>
      <div className="journey-card-footer">
        <span>{item.footer}</span>
        <i className="bi bi-arrow-up-right"></i>
      </div>
    </div>
  );
}

