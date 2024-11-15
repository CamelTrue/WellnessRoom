import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

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

        if (scrollTop > 0 && !isAtBottom) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <i className="fa-solid fa-arrow-up fa-2x arrow-icon" />
        </button>
    );
};

export default ScrollToTopButton;