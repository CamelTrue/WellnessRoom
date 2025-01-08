import { useLoading } from '../context/LoadingContext';
import { useEffect, useState } from 'react';
import wave2 from '/media/wave2.svg'; 
import ContactUs from './ContactUs';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Navbar = () => {
    const { updateProgress } = useLoading();
    const [backgroundPosition, setBackgroundPosition] = useState({ x: '50%', y: '50%' });
    const [showContactButton, setShowContactButton] = useState(false);

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const imagesToPreload = [wave2];

        Promise.all(
            imagesToPreload.map(
                (src) =>
                    new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = resolve;
                        img.onerror = () => {
                            console.error(`Errore nel caricamento dell'immagine: ${src}`);
                            resolve();
                        };
                    })
            )
        ).then(() => updateProgress(50));

        const handleScroll = () => {
            const navbar = document.querySelector('header');
            if (navbar) {
                const navbarBottom = navbar.getBoundingClientRect().bottom;
                setShowContactButton(navbarBottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [updateProgress]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = currentTarget;

        const x = ((clientX - offsetLeft) / offsetWidth) * 100;
        const y = ((clientY - offsetTop) / offsetHeight) * 100;

        setBackgroundPosition({ x: `${x}%`, y: `${y}%` });
    };

    const handleMouseLeave = () => {
        setBackgroundPosition({ x: '50%', y: '50%' });
    };

    return (
        <>
            <header
                className="container-fluid mb-4"
                onMouseMove={!isTouchDevice ? handleMouseMove : null}
                onMouseLeave={!isTouchDevice ? handleMouseLeave : null}
            >
                <div className="row">
                    <div
                        className="col12 header"
                        style={{
                            backgroundPosition: `${backgroundPosition.x} ${backgroundPosition.y}`,
                        }}
                    >
                        <div className="row position-relative">
                            <div className="col-12 waves">
                                <div className="row">
                                    <div className="col-5 titles">
                                        <h1
                                            className="small-title-device"
                                            data-aos="fade-left"
                                            data-aos-delay="0"
                                            data-aos-duration="1000"
                                        >
                                            Wellness Room
                                        </h1>
                                        <h2
                                            className="text-header"
                                            data-aos="fade-left"
                                            data-aos-delay="200"
                                            data-aos-duration="1000"
                                        >
                                            Nel nostro studio racchiudiamo i tre concetti chiave per stare bene
                                        </h2>
                                        <h2
                                            className="text-header"
                                            data-aos="fade-left"
                                            data-aos-delay="400"
                                            data-aos-duration="1000"
                                        >
                                            <b className="bold-text">mente</b>, <b className="bold-text">corpo</b> &{' '}
                                            <b className="bold-text">cuore</b>
                                            <p>per favorire la vostra quotidianità e la performance dello sportivo.</p>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <ContactUs />
        </>
    );
};

export default Navbar;
