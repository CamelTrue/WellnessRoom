import './styles/components/card.scss';
import React from 'react';

const Card = ({ iconClass, title, text, cardNumber }) => {
    const imageSrc = `/media/${cardNumber}.webp`;

    return (
        <article className="d-flex justify-content-center card-responsive-hero">
            <div className="card-skin pointer">
                <img
                    src={imageSrc}
                    alt={`Card background ${cardNumber}`}
                    loading="lazy"
                    className="card-background-image"
                />

                <div className="gradient-overlay"></div>

                <div className="card-content p-3">
                    <div className="card-icon mb-2 cursor">
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
