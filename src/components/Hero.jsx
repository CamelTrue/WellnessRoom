import Section from './Section';
import IconContent from './IconContent';

const Hero = () => {
    const cards = [
        { iconClass: 'fa-regular fa-user fa-2x', title: 'Biologia Nutrizionista Dott.ssa Radha Quas', text: 'Sulla base delle tue caratteristiche fisiche e del tuo stile di vita effettuo piani specifici basandomi su principi scientifici e percorsi integrati di mental coaching.' },
        { iconClass: 'fa-solid fa-location-dot fa-2x', title: 'Il Mio Metodo', text: 'La base del mio percorso è l’educazione e la conoscenza del mondo dell’alimentazione e nutrizione, in seguito sulla base di principi scientifici e sulle tue abitudini genero il tuo piano nutrizionale completo.' },
        { iconClass: 'fa-regular fa-life-ring fa-2x', title: 'Specializzazione', text: 'Accompagno lo sportivo nelle varie fasi dell’anno lavorando sul piano nutrizionale favorendo cambiamenti della composizione corporea e migliorando la performance.' },
        { iconClass: 'fa-solid fa-route fa-2x', title: 'Negozio Integrazione e Healthy Food', text: 'Puoi trovare tutto ciò che effettivamente ti occorre per favorire il tuo percorso nutrizionale o la tua performance sportiva.' },
    ];

    return (
        <>
            <main>
                {/* Card Section */}
                <section className="container-fluid pt-5 card-section">
                    <div className="row">
                        <div className="col-12">
                            <div className="row d-flex flex-column align-items-center text-center mb-4 align-small-devices">
                                <div className="col-12 col-md-8 col-lg-6">
                                    <h2 className="card-section-title">Cosa Offriamo?</h2>
                                </div>
                                <div className="col-12 col-md-10 col-lg-8 mt-3">
                                    <h3 className="card-section-text">
                                        Affidati a noi per ritrovare il tuo equilibrio psico-fisico attraverso percorsi completi in base alle tue 
                                        esigenze a partire da una semplice ricerca di benessere fino ad arrivare alla performance sportiva.
                                    </h3>
                                </div>
                            </div>

                            <div className="row pt-4 text-white">
                                {cards.map((card, index) => (
                                    <article key={index} className="col-xl-3 col-lg-6 col-xl-3 d-flex justify-content-center mb-3">
                                        <div className={`card-skin card-${index + 1}`}>
                                            <div className="card-content p-3">
                                                <div className="card-icon mb-2">
                                                    <i className={card.iconClass}></i>
                                                </div>
                                                <div className="card-title">
                                                    <h2>{card.title}</h2>
                                                </div>
                                                <div className="card-text">
                                                    <p>{card.text}</p>
                                                </div>
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
