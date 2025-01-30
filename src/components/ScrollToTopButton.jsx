import React, { useState, useEffect, useRef } from 'react';
import './styles/components/scrolltotopbutton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setIsMounted(true);
      setIsFadingOut(false);
    } else {
      if (isMounted) {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsMounted(false);
          setIsFadingOut(false);
        }, 300);
      }
    }
  }, [isVisible, isMounted]);

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
