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
        
        // Se vuoi SEMPRE mostrare il bottone tranne in cima:
        if (scrollTop === 0) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Inizializza lo stato in base allo scroll corrente

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Gestione toggle automatico "auto" ogni 2 secondi
    useEffect(() => {
        if (isVisible && !isInteractive.current) {
        // Avvia toggle automatico
            setIsAuto(true);
            autoToggleInterval.current = setInterval(() => {
                setIsAuto(prev => !prev);
            }, 2000);
        } else {
        // Stop
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
        </>
    );
};

export default ScrollToTopButton;
