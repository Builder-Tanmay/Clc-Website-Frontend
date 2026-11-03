import React from 'react';
import { getMapsUrl } from '../../data/centresData';

export default function CentreCard({ centre, delay = 0 }) {
  const cleanPhone = centre.phone.replace(/\s+/g, '');

  return (
    <div className="col-md-6 col-lg-4 centre-card" style={{ animationDelay: `${delay}ms` }}>
      <article className="tile h-100">
        <div className="tile__body">
          <p className="centre-area">{centre.area}</p>
          <h3>{centre.name}</h3>
          <p className="centre-address mb-0">
            <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
            <span>{centre.address}</span>
          </p>
          <div className="centre-actions mt-auto">
            <a
              className="btn btn-clc-outline"
              href={getMapsUrl(centre)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-map"></i>Directions
            </a>
            <a className="btn btn-clc" href={`tel:${cleanPhone}`}>
              <i className="bi bi-telephone"></i>Call
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

