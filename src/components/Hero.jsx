import Section from './Section';
import IconContent from './IconContent';

const Hero = () => {
    const cards = [
        { iconClass: 'fa-regular fa-user fa-2x', title: 'Biologia Nutrizionista Dott.ssa Radha Quas', text: 'sulla base delle tue caratteristiche fisiche e del tuo stile di vita effettuo piani specifici basandomi su principi scientifici e percorsi integrati di mental coaching'},
        { iconClass: 'fa-solid fa-location-dot fa-2x', title: 'Il mio metodo', text: 'la base del mio percorso è l’educazione e la conoscenza del mondo dell’alimentazione e nutrizione, in seguito sulla base di principi scientifici e sulle tue abitudini genero il tuo piano nutrizionale completo'},
        { iconClass: 'fa-regular fa-life-ring fa-2x', title: 'Specializzazione', text: 'accompagno lo sportivo nelle varie fasi dell’anno lavorando sul piano nutrizionale favorendo cambiamenti della composizione corporea e migliorando la performance'},
        { iconClass: 'fa-solid fa-route fa-2x', title: 'Negozio integrazione e healty food', text: ' puoi trovare tutto ciò che effettivamente ti occorre per favorire il tuo percorso nutrizionale o la tua performance sportiva'},
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
                                    <h2 className="card-section-title">Cosa Offriamo?</h2>
                                </div>
                                <div className="col-6">
                                    <h3 className="card-section-text">
                                        Affidati a noi per ritrovare i tuo equilibrio psico-fisico attraverso percorsi completi in base alle tue 
                                        esigenze a partire da una semplice ricerca di benessere fino ad arrivare alla performance sportiva.
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