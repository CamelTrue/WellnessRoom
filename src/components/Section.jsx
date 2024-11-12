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

                <div className="flex-row">
                    <article className="col-6 infocard-box-main-section">
                        <div 
                            data-aos-delay="200" 
                            data-aos="fade-right" 
                            className="infocard h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start"
                        >
                            <h3 className="infocard-title">
                                Chi siamo?
                            </h3>
                            <p className="infocard-text p-0 m-0">
                                Sono la dott.ssa Radha laureata in scienze e tecnologie alimentari e scienze della nutrizione 
                                umana con iscrizione all’albo dei biologi TRI_A3664.
                            </p>
                        </div>
                    </article>
                    {/* Box Icone */}
                    <div className="infocard-icon-full-boxes" data-aos="fade-down" data-aos-delay="0">
                        <div className="d-flex flex-column">
                            {/* Prima riga di icone */}
                            <div className="d-flex justify-content-center align-items-center">
                                <figure data-aos="fade-down" data-aos-delay="400" className="infocard-icon m-0 m-3">
                                    <i className="fa-solid fa-fire fa-2x text-danger"></i>
                                </figure>
                                <figure data-aos="fade-down" data-aos-delay="600" className="infocard-icon m-0 m-3">
                                    <i className="fa-solid fa-seedling fa-2x text-success"></i>
                                </figure>
                                <figure data-aos="fade-down" data-aos-delay="800" className="infocard-icon m-0 m-3">
                                    <i className="fa-regular fa-bell fa-2x text-warning"></i>
                                </figure>
                            </div>
                            {/* Seconda riga di icone */}
                            <div className="d-flex">
                                <figure data-aos="fade-down" data-aos-delay="1000" className="infocard-icon m-0 m-3">
                                    <i className="fa-solid fa-box-open fa-2x text-primary"></i>
                                </figure>
                                <figure data-aos="fade-down" data-aos-delay="1200" className="infocard-icon m-0 m-3">
                                    <i className="fa-solid fa-code-branch fa-2x text-muted"></i>
                                </figure>
                                <figure data-aos="fade-down" data-aos-delay="1400" className="infocard-icon m-0 m-3">
                                    <i className="fa-solid fa-shield fa-2x text-black"></i>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Infocard aggiuntive */}
                <div className="flex-row mt-5">
                    <article 
                        data-aos-delay="400" 
                        data-aos="fade-right" 
                        className="infocard card-position-box sm-device col-6"
                    >
                        <p className="infocard-text p-0 m-0 text-center text-lg-start">
                            La mia carriera da sportiva come 
                            motociclista mi ha permesso di lavorare al meglio su me stessa per ottenere prestazioni a livello 
                            nazionale e mondiale, favorendo di conseguenza il mio percorso di studi. 
                        </p>
                    </article>
                    <div className="infocard-icon-box" data-aos="fade-down" data-aos-delay="0">
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center">
                            <figure data-aos="fade-down" data-aos-delay="400" className="infocard-icon m-1">
                                <i className="fa-solid fa-fire fa-2x text-danger"></i>
                            </figure>
                        </div>
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center">
                            <figure data-aos="fade-down" data-aos-delay="600" className="infocard-icon m-1">
                                <i className="fa-solid fa-seedling fa-2x text-success"></i>
                            </figure>
                        </div>
                    </div>
                </div>



                
                <div className="flex-row mt-5">
                    <article 
                        data-aos-delay="600" 
                        data-aos="fade-right" 
                        className="infocard card-position-box-full sm-device col-6"
                    >
                        <p className="infocard-text p-0 m-0 text-center text-lg-start">
                            Grazie al conseguimento 
                            di diplomi in ambito sportivo sono riuscita a creare il mio programma nutrizionale portando la 
                            persona a cambiare le sue abitudini in modo graduale e soprattutto trasmettendo la mia 
                            conoscenza. Qualsiasi inizio parte dall’educazione e questo è quello che cerco di trasmettere ai 
                            miei clienti.
                        </p>
                    </article>
                    <div className="infocard-icon-box" data-aos="fade-down" data-aos-delay="0">
                        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center">
                            <figure data-aos="fade-down" data-aos-delay="400" className="infocard-icon m-2">
                                <i className="fa-solid fa-fire fa-2x text-danger"></i>
                            </figure>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Section;
