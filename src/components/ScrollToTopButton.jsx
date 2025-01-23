import React, { useState, useEffect, useRef } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Aggiungiamo stati per animazione di entrata/uscita
  const [isMounted, setIsMounted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const [isAuto, setIsAuto] = useState(false);
  const isInteractive = useRef(false);
  const autoToggleInterval = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Mostra il bottone se scrollTop > 0
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inizializza lo stato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Gestione del mount/unmount con fade-in / fade-out
  useEffect(() => {
    if (isVisible) {
      // Se diventa visibile, "montiamo" il bottone
      setIsMounted(true);
      setIsFadingOut(false);
    } else {
      // Se diventa non visibile, e il bottone è montato, avvia fade-out
      if (isMounted) {
        setIsFadingOut(true);
        // Dopo X ms (durata dell'animazione), rimuoviamo il bottone dal DOM
        setTimeout(() => {
          setIsMounted(false);
          setIsFadingOut(false);
        }, 300);
      }
    }
  }, [isVisible, isMounted]);

  // Toggle automatico "auto" ogni 2 secondi
  useEffect(() => {
    if (isVisible && !isInteractive.current) {
      setIsAuto(true);
      autoToggleInterval.current = setInterval(() => {
        setIsAuto(prev => !prev);
      }, 2000);
    } else {
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

  // Scegli la classe di animazione in base a isFadingOut
  const animationClass = isFadingOut ? 'fade-out' : 'fade-in';

  return (
    <>
      {isMounted && (
        <button
          className={`scroll-to-top-button ${animationClass} ${isAuto ? 'auto' : ''}`}
          onClick={scrollToTop}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fas icon-color-arrow fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
