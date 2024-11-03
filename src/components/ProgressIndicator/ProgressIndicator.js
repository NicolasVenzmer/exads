import React from 'react';
import './ProgressIndicator.css';

function ProgressIndicator({currentStep, totalSteps, label}) {
    return (
        <div className="progress-container">
            <div className="progress">
                <p>{label} {currentStep} OF {totalSteps}:</p>
                <div className="progress-dots">
                    {Array.from({length: totalSteps}).map((_, index) => (
                        <span
                            key={index}
                            className={index + 1 === currentStep ? 'dot active' : 'dot'}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProgressIndicator;
