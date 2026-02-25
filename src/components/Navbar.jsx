import { useEffect, useRef, useState } from 'react';
import './styles/components/navbar.scss';
import ContactUs from './ContactUs';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

const Navbar = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const headerRef = useRef(null);

    useEffect(() => {
        // AOS.init({
        //     duration: 1000,
        //     once: true,
        // });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsHeaderVisible(true);
                    } else {
                        setIsHeaderVisible(false);
                    }
                });
            },
            {
                root: null,
                threshold: 0.10
            }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    return (
        <>
            <header className="container-fluid" ref={headerRef}>
                <div className="row">
                    <div 
                        className="col-12 header"
                        style={{ opacity: isHeaderVisible ? 1 : 0 }}
                    >
                        <div className="row position-relative">
                            <div className="col-12 waves">
                                <div className="row">
                                    <div className="col-5 titles">
                                        <h1
                                            className="small-title-device"
                                            // data-aos="fade-up"
                                            // data-aos-delay="0"
                                            // data-aos-duration="1000"
                                            // data-aos-anchor-placement="top-center"
                                        >
                                            Wellness Room
                                        </h1>
                                        <h2
                                            className="text-header"
                                            // data-aos="fade-up"
                                            // data-aos-delay="300"
                                            // data-aos-duration="1000"
                                            // data-aos-anchor-placement="top-center"
                                        >
                                            Nel nostro studio racchiudiamo i tre concetti chiave per stare bene
                                        </h2>
                                        <h2
                                            className="text-header"
                                            // data-aos="fade-up"
                                            // data-aos-delay="600"
                                            // data-aos-duration="1000"
                                            // data-aos-anchor-placement="top-bottom"
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
