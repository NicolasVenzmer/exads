import React from 'react';
import './ProgressIndicator.css';

function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="progress-indicator">
      <p>QUESTION {currentStep} OF {totalSteps}</p>
      <div className="dots">
        {[...Array(totalSteps)].map((_, index) => (
          <span key={index} className={`dot ${index < currentStep ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

export default ProgressIndicator;
