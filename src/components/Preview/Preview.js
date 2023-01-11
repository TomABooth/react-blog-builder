import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, font, align, text }) {
  return (
    <div className={`preview ${font}`} style={{ textAlign: align }}>
      <h1 key={title}>{title}</h1>
      <p>{subtitle}</p>
      <p>{text}</p>
    </div>
  );
}
