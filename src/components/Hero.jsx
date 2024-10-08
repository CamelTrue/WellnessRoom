import Section from './Section';
import IconContent from './IconContent';

const Hero = () => {
    const cards = [
        { iconClass: 'fa-regular fa-user fa-2x', title: 'Lorem', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit repudiandae id deleniti! Error harum maiores velit quos minus.'},
        { iconClass: 'fa-solid fa-location-dot fa-2x', title: 'Lorem', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit repudiandae id deleniti! Error harum maiores velit quos minus.'},
        { iconClass: 'fa-regular fa-life-ring fa-2x', title: 'Lorem', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit repudiandae id deleniti! Error harum maiores velit quos minus.'},
        { iconClass: 'fa-solid fa-route fa-2x', title: 'Lorem', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit repudiandae id deleniti! Error harum maiores velit quos minus.'},
    ];

    return (
        <>
            <main>
                {/* Card Section */}
                <section className="container-fluid pt-5 card-section">
                    <div className="row">
                        <div className="col-12">
                            <div className="row d-flex flex-column align-items-center text-center mb-5">
                                <div className="col-3">
                                    <h2 className="card-section-title">Lorem ipsum dolor sit</h2>
                                </div>
                                <div className="col-6">
                                    <h3 className="card-section-text">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quaerat praesentium possimus blanditiis
                                        culpa, alias, modi vel laudantium dignissimos quo consectetur? Ipsum cum, quisquam reiciendis tempore
                                        asperiores cupiditate vero!
                                    </h3>
                                </div>
                            </div>

                            <div className="row pt-5 text-white">
                                {cards.map((card, index) => (
                                <article key={index} className="card-skin col-12 col-md-6 col-xl-3 card-containers">
                                    <div className={`card-skin p-5 card-${index + 1}`}>
                                        <div className="card-content d-flex flex-column">
                                            <div className="card-icon pb-4">
                                                <i className={card.iconClass}></i>
                                            </div>
                                            <div className="card-title border-bottom border-3 border-warning">
                                                <h2>{card.title}</h2>
                                            </div>
                                            <div className="card-text">{card.text}</div>
                                        </div>
                                    </div>
                                </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Section />
                <IconContent />
            </main>
        </>
    );
};

export default Hero;