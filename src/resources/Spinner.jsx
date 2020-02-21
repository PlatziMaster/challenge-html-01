import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-ring-main">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
