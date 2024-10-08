import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });
    }, []);

    const [backgroundPosition, setBackgroundPosition] = useState({ x: '50%', y: '50%' });

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
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="row">
                    <div 
                        className="col12 header"
                        style={{
                            backgroundPosition: `${backgroundPosition.x} ${backgroundPosition.y}`,
                            transition: 'background-position 0.1s ease-out'
                        }}
                    >
                        <div className="row position-relative">
                            <div className="col-12 waves">
                                <div className="row">
                                    <div className="col-5 titles">
                                        <h1 data-aos="fade-left" data-aos-delay="0" data-aos-duration="1000">Lorem Ipsum</h1>
                                        <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                        <h2 data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">Animi voluptates nulla ratione veritatis, amet deserunt.</h2>
                                        <button data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" className="btn-custom bg-warning">MORE</button>
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
