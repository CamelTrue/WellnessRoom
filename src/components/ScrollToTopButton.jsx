const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTop} className="scroll-to-top-button">
            <i className="fa-solid fa-arrow-right fa-2x arrow-icon" />
        </button>
    );
};

export default ScrollToTopButton;
