import React from 'react';

const ProgressBar = ({ progress }) => {
    const progressStyle = {
        width: `${progress}%`,
        height: '20px',
        backgroundColor: 'red',
        transition: 'width 0.5s ease',
    };

    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#ddd',
                position: 'fixed',
                top: 0,
                zIndex: 9999,
            }}
        >
            <div style={progressStyle}></div>
        </div>
    );
};

export default ProgressBar;
