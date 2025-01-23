import React from 'react';

const Card = ({ iconClass, title, text, cardNumber }) => {
    return (
        <article className="d-flex justify-content-center mb-4">
            <div className={`card-skin card-${cardNumber}`}>
                <div className="card-content p-3">
                    <div className="card-icon mb-2">
                        <i className={iconClass}></i>
                    </div>
                    <div className="card-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="card-text">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;
