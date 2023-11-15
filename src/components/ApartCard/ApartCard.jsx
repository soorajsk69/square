// ApartCard.js

import React from 'react';
import './ApartCard.css';

function ApartCard({ apartdata }) {
  return (
    <div className="card">
      <img src={apartdata.image} alt="Apartment" className="card-img-top" />
      <div className="flat-space-badge">{apartdata.bhk}</div>
      <div className="card-body">
        <h3>{apartdata.name}</h3>
        <p className="card-text">{apartdata.description}.</p>
      </div>
    </div>
  );
}

export default ApartCard;
