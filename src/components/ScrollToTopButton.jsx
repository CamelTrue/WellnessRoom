import React, { useState, useEffect, useRef } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAuto, setIsAuto] = useState(false);
    const isInteractive = useRef(false);
    const autoToggleInterval = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const isAtBottom = windowHeight + scrollTop >= documentHeight - 1;

        if (scrollTop === 0) {
            setIsVisible(false);
        } else if (scrollTop > 0 && !isAtBottom) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        handleScroll(); // Inizializza lo stato in base alla posizione iniziale

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Avvia il toggle automatico se il bottone è visibile e non è interattivo
        if (isVisible && !isInteractive.current) {
            setIsAuto(true);
            autoToggleInterval.current = setInterval(() => {
                setIsAuto(prev => !prev);
            }, 2000); // Toggle ogni 2 secondi
        }

        // Pulisci l'intervallo se il bottone non è visibile o se è interattivo
        if (!isVisible || isInteractive.current) {
            setIsAuto(false);
            if (autoToggleInterval.current) {
                clearInterval(autoToggleInterval.current);
                autoToggleInterval.current = null;
            }
        }

        return () => {
            if (autoToggleInterval.current) {
                clearInterval(autoToggleInterval.current);
            }
        };
    }, [isVisible]);

    const handleMouseEnter = () => {
        isInteractive.current = true;
        setIsAuto(false);
        if (autoToggleInterval.current) {
            clearInterval(autoToggleInterval.current);
            autoToggleInterval.current = null;
        }
    };

    const handleMouseLeave = () => {
        isInteractive.current = false;
        if (isVisible && !autoToggleInterval.current) {
            setIsAuto(true);
            autoToggleInterval.current = setInterval(() => {
                setIsAuto(prev => !prev);
            }, 2000);
        }
    };

    return (
        <>
            <div>
                {isVisible && (
                    <button
                        className={`scroll-to-top-button ${isAuto ? 'auto' : ''}`}
                        onClick={scrollToTop}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}
            </div>
        </>
    );
};

export default ScrollToTopButton;
