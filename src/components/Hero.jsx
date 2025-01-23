import IconContent from './IconContent';
import Section from './Section';
import Card from './Card';

const cards = [
    { iconClass: 'fa-regular fa-user fa-2x', title: 'Biologa Nutrizionista Radha Quas', text: 'Sulla base delle tue caratteristiche fisiche e del tuo stile di vita effettuo piani specifici, in studio e online, basandomi su principi scientifici e percorsi integrati di mental coaching.' },
    { iconClass: 'fa-solid fa-store fa-2x', title: 'Negozio Integrazione e Healthy Food', text: 'Puoi trovare tutto ciò che effettivamente ti occorre per favorire il tuo percorso nutrizionale o la tua performance sportiva.' },
    { iconClass: 'fa-solid fa-spa fa-2x', title: 'Massaggio', text: 'Per completare il cerchio del benessere offriamo anche massaggi di ogni tipo per prevenire e favorire la salute del tuo corpo.' },
    { iconClass: 'fa-brands fa-facebook fa-2x', title: 'Social', text: 'Nella nostra pagina puoi scoprire tutte le ricette fit e conoscere il mondo dell’integrazione.' },
    { iconClass: 'fa-solid fa-book fa-2x', title: 'Il Nostro Metodo', text: 'La base del percorso è l’educazione e la conoscenza del mondo dell’alimentazione, nutrizione e massaggio in seguito sulla base di principi scientifici e sulle tue abitudini generiamo il tuo percorso completo.' },
    { iconClass: 'fa-regular fa-life-ring fa-2x', title: 'Specializzazione', text: 'Accompagniamo lo sportivo nelle varie fasi dell’anno favorendo cambiamenti della composizione corporea e migliorando la performance.' },
];

const Hero = () => {

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

                            <div className="row pt-4 text-white justify-content-center">
                                {cards.map((card, index) => (
                                    <div key={index} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                                        <Card
                                            iconClass={card.iconClass}
                                            title={card.title}
                                            text={card.text}
                                            cardNumber={index + 1}
                                        />
                                    </div>
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
