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
            <div className="row justify-content-center">
                
                <article className="col-12 col-lg-5">
                    <div 
                        data-aos-delay="200" 
                        data-aos="fade-right" 
                        className="infocard d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start"
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
                <aside className="icons-maring-small-devices col-12 col-lg-5 infocard-icons-container d-flex flex-column justify-content-between mt-4 mt-lg-0">
                    <div className="row">
                        {/* Prima riga di icone */}
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center mb-3">
                            <figure data-aos="fade-right" className="infocard-icon m-0">
                                <i className="fa-solid fa-fire fa-2x text-danger"></i>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center mb-3">
                            <figure data-aos="fade-down" className="infocard-icon m-0">
                                <i className="fa-solid fa-seedling fa-2x text-success"></i>
                            </figure>
                        </div>
                        {/* Seconda riga di icone */}
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center mb-3">
                            <figure data-aos="fade-left" className="infocard-icon m-0">
                                <i className="fa-regular fa-bell fa-2x text-warning"></i>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center mb-3">
                            <figure data-aos="fade-up" className="infocard-icon m-0">
                                <i className="fa-solid fa-box-open fa-2x text-primary"></i>
                            </figure>
                        </div>
                        {/* Terza riga di icone */}
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center mb-3">
                            <figure data-aos="fade-right" className="infocard-icon m-0">
                                <i className="fa-solid fa-code-branch fa-2x text-muted"></i>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center">
                            <figure data-aos="fade-down" className="infocard-icon m-0">
                                <i className="fa-solid fa-shield fa-2x text-black"></i>
                            </figure>
                        </div>
                    </div>
                </aside>
            </div>
            {/* Infocard aggiuntive */}
            <div 
                data-aos-delay="400" 
                data-aos="fade-right" 
                className="infocard mt-4 w-100 sm-device"
            >
                <p className="infocard-text p-0 m-0 text-center text-lg-start">
                    La mia carriera da sportiva come 
                    motociclista mi ha permesso di lavorare al meglio su me stessa per ottenere prestazioni a livello 
                    nazionale e mondiale, favorendo di conseguenza il mio percorso di studi. 
                </p>
            </div>
            
            <div 
                data-aos-delay="600" 
                data-aos="fade-right" 
                className="infocard mt-4 w-100 sm-device"
            >
                <p className="infocard-text p-0 m-0 text-center text-lg-start">
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

export default Section;
