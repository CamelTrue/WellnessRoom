import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Section = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });
    }, []);
  return (
    <>
        <section className="container-fluid pt-5 icons-section">
            <div className="row">
                
                <article className="col-12 col-lg-5">
                    <div 
                        data-aos-delay="200" 
                        data-aos="fade-right" 
                        className="infocard d-flex flex-column justify-content-center"
                    >
                        <h3 className="infocard-title">
                            Chi sono?
                        </h3>
                        <p className="infocard-text p-0 m-0">
                            Sono la dott.ssa Radha laureata in scienze e tecnologie alimentari e scienze della nutrizione 
                            umana con iscrizione all’albo dei biologi TRI_A3664.
                        </p>
                    </div>
                </article>
                <aside className="col-12 col-lg-5 infocard-icons-container d-flex flex-column justify-content-between">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure data-aos="fade-right" className="infocard-icon m-0">
                                <i className="fa-solid fa-fire fa-3x text-danger"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure data-aos="fade-down" className="infocard-icon m-0">
                                <i className="fa-solid fa-seedling fa-3x text-success"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure  data-aos="fade-left"className="infocard-icon m-0">
                                <i className="fa-regular fa-bell fa-3x text-warning"></i>
                            </figure>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure data-aos="fade-up" className="infocard-icon m-0">
                                <i className="fa-solid fa-box-open fa-3x text-primary"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure data-aos="fade-right" className="infocard-icon m-0">
                                <i className="fa-solid fa-code-branch fa-3x text-muted"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure data-aos="fade-down" className="infocard-icon m-0">
                                <i className="fa-solid fa-shield fa-3x text-black"></i>
                            </figure>
                        </div>
                        
                    </div>
                    <article>
                </article>
                </aside>
            </div>
            <div 
                data-aos-delay="400" 
                data-aos="fade-right" 
                className="infocard custom-position custom-small-margin-position"
            >
                <p className="infocard-text p-0 m-0">
                    La mia carriera da sportiva come 
                    motociclista mi ha permesso di lavorerà al meglio su me stessa per ottenere prestazioni a livello 
                    nazionale e mondiale favorendo di conseguenza il mio percorsi di studi. 
                </p>
            </div>
            
            <div 
                data-aos-delay="600" 
                data-aos="fade-right" 
                className="infocard custom-position custom-large-margin-position"
            >
                <p className="infocard-text p-0 m-0">
                    Grazie al conseguimento 
                    di diplomi in ambito sportivo sono riuscita a creare il mio programma nutrizionale portando la 
                    persona a cambiare le sue abitudini in modo graduale e soprattutto trasmettendo la mia 
                    conoscenza. Qualsiasi inizio parte dall’educazione e questo è quello che cerco di trasmettere ai 
                    miei clienti.
                </p>
            </div>
        </section>
    </>
  )
}

export default Section