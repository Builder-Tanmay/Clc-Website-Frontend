import React from 'react';

export default function TeamCard({ member }) {
  return (
    <article className="tile h-100">
      <div className="tile__media">
        <img
          className="tile__img"
          src={member.img}
          alt={member.title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="tile__body">
        <h3>{member.title}</h3>
        <p className="tile__role">{member.role}</p>
        <p className="mb-0">{member.desc}</p>
      </div>
    </article>
  );
}

