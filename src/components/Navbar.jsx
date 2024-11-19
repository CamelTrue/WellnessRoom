import { useEffect, useState } from 'react';
import ContactUs from './ContactUs';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });
    }, []);

    const [backgroundPosition, setBackgroundPosition] = useState({ x: '50%', y: '50%' });

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

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
                onMouseMove={ !isTouchDevice ? handleMouseMove : null }
                onMouseLeave={ !isTouchDevice ? handleMouseLeave : null }
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
                                        <h1 className="small-title-device" data-aos="fade-left" data-aos-delay="0" data-aos-duration="1000">Wellness Room</h1>
                                        <h2 className="text-header" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Nel nostro studio racchiudiamo i tre concetti chiave per stare bene</h2>
                                        <h2 className="text-header" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                                            <b className='bold-text'>mente</b>, <b className='bold-text'>corpo</b> & <b className='bold-text'>cuore</b> 
                                            <p>per favorire la vostra quotidianità e la performance dello sportivo.</p>
                                        </h2>
                                        <ContactUs />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
