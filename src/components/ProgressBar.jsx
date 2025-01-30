import React, { useState, useEffect } from 'react';

function ProgressBar({ progress = 0, onFinish }) {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => {
                setExiting(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    const handleTransitionEnd = (e) => {
        if (e.propertyName === 'clip-path' && exiting) {
            onFinish?.();
        }
    };

    return (
        <div
            className={`loader-container ${exiting ? 'exit' : ''}`}
            onTransitionEnd={handleTransitionEnd}
        >
            <div className="loader-content">
                <div className="loader-bar" style={{ width: `${progress}%` }} />
                <span className="loader-text">Loading {progress}%</span>
            </div>
        </div>
    );
}

export default ProgressBar;
