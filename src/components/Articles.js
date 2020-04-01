import React from 'react';
import '../styles/components/Articles.css';

const Articles = ({ children }) => {
  return (
    <div>
      <section className="articles">{children}</section>
    </div>
  );
};

export default Articles;
