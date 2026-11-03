import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function ServiceCard({ service }) {
  const { openBooking } = useModal();

  return (
    <article className="tile h-100">
      <div className="tile__media">
        <img
          className="tile__img"
          src={service.img}
          alt={service.title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="tile__body">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <button
          type="button"
          className="link-btn tile__cta"
          onClick={() => openBooking(service.concern)}
        >
          Ask about this therapy
        </button>
      </div>
    </article>
  );
}

