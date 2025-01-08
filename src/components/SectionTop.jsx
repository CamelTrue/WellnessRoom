import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const SectionTop = () => {
    const widgetData = [
        { icon: 'fa-solid fa-route fa-3x text-primary', number: 12, text: 'Lorem ipsum dolor, sit amet consectetur.'},
        { icon: 'fa-solid fa-compass fa-2x text-primary', number: 412, text: 'Lorem ipsum'},
        { icon: 'fa-solid fa-route fa-3x text-primary', number: 12, text: 'Lorem ipsum dolor, sit amet consectetur.'},
        { icon: 'fa-solid fa-compass fa-2x text-primary', number: 412, text: 'Lorem ipsum'},
    ];

    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        });
    }, []);
        

    return (
        <div className="container-fluid widgets-section d-flex flex-column justify-content-center align-items-center">
            <div className="row w-100 d-flex flex-column">
                
                {/* Prima sezione */}
                <div data-aos="fade-right" className="col-12 col-lg-5">
                    <div className="row">
                        {widgetData.slice(0, 2).map((widget, index) => (
                        <div className="col-12 col-lg-6" key={index}>
                            <div className="widget">
                                <div className="widget-icon pb-3">
                                    <i className={widget.icon}></i>
                                </div>
                            <div className="widget-title">
                                <h2>{widget.number}</h2>
                            </div>
                            <div className="widget-text">{widget.text}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Seconda sezione */}
                <div data-aos="fade-right" className="col-12 pt-4 col-lg-8 d-flex justify-content-end">
                    <div className="row w-100">
                        <div className="col-lg-1 d-none d-md-block"></div>
                        {widgetData.slice(2).map((widget, index) => (
                            <div className="col-12 col-lg-5" key={index + 2}>
                                <div className="widget d-flex flex-column">
                                    <div className="widget-icon pb-3">
                                        <i className={widget.icon}></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>{widget.number}</h2>
                                    </div>
                                    <div className="widget-text">{widget.text}</div>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
)};

export default SectionTop;
