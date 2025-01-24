import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
    
const sectionsData = [
    {
        mainText: ( <> Sono la <span className="owner-info-title">Dott.ssa Radha</span> laureata in scienze e tecnologie alimentari e scienze della nutrizione  umana con iscrizione all’albo dei biologi TRI_A3664. </> ),
        subTexts: [ "La mia carriera da sportiva professionista come motociclista mi ha permesso di lavorare al meglio su me stessa per ottenere prestazioni a livello nazionale e mondiale favorendo di conseguenza il mio percorso di studi.", "Grazie al conseguimento di diplomi in ambito sportivo e mental coach sono riuscita a creare un programma personalizzato portando la persona a cambiare le sue abitudini in modo graduale e soprattutto trasmettendo la mia conoscenza. Qualsiasi inizio parte dall’educazione e questo è quello che cerco di trasmettere ai miei clienti."],
        image: "public/media/Radha.webp"
    },
    {
        subTexts: [ "In questo anno i risultati del duro lavoro sono arrivati sempre più in alto fino a raggiungere una grande visibilità che ci ha portati alla decisione di aprire un negozio di integratori ed healthy food per avere tutto il necessario per un’alimentazione ed integrazione equilibrata per tutte le persone, sportive e non.", "Tutto è iniziato come un gioco fino a diventare un lavoro, ricordatevi di inseguire sempre i vostri obiettivi." ], 
        mainText: ( <> Sono <span className="owner-info-title">Marta Fior</span> ho iniziato circa un anno fa con la gestione della pagina ufficiale Wellness Room  sulla piattaforma Instagram, portando ciò che è il mio lavoro di pasticcera ovvero facendo ricette ma con un tocco sano. </> ),
        image: "public/media/Marta.webp"
    },
    {
        mainText: ( <> Sono <span className="owner-info-title">Lorenzo Fadelli</span>, massaggiatore dello studio Wellness Room. E’ da diversi anni che sto  conseguendo corsi di massaggi di ogni tipo per dare più opportunità al mio cliente. </> ),
        subTexts: [ "La mia passione per lo sport mi ha permesso di fissare l’obiettivo fino a diventare massaggiatore; oggi ho il mio studio e lavoro con diverse squadre calcistiche, cerco di trasmettere al mio cliente una condizione di benessere per prevenire ogni situazione.", "La mia continua evoluzione in questo ambito mi permetterà di scoprire a fondo questo mondo e rendere i miei clienti sempre più soddisfatti." ],
        image: "public/media/Lorenzo.webp"
    }
];

const Section = () => {

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      const onLoad = () => AOS.refresh();
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }, []);
  
    return (
      <>
        <h2 
          className="text-center infocard-title"
          data-aos="fade-up"
          data-aos-delay="200" 
          data-aos-anchor-placement="top-bottom"
        >
          Chi siamo?
        </h2>
  
        {sectionsData.map((section, index) => {
          const isInverted = index === 1;
  
          return (
            <section key={index} className="container-fluid icons-section">
              <div className="row align-items-center mb-5 mt-5">
                {isInverted ? (
                  <>
                    <div className="col-12 col-lg-6">
                      <div 
                        data-aos="fade-up"
                        data-aos-delay="200" 
                        data-aos-anchor-placement="top-bottom"
                        className="d-flex justify-content-center"
                      >
                        <img 
                          src={section.image} 
                          alt={`Immagine ${index + 1}`} 
                          className="img-fluid circular-image pointer"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                      <div 
                        data-aos="fade-up"
                        data-aos-delay="200" 
                        data-aos-anchor-placement="top-bottom"
                        className="infocard h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start"
                      >
                        <p className="infocard-text p-0 m-0">
                          {section.mainText}
                        </p>
                      </div>
                      {section.subTexts.map((text, subIndex) => (
                        <div key={subIndex} className="mt-4">
                          <div 
                            data-aos-delay={200 + (subIndex + 1) * 200} 
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            className="infocard sm-device"
                          >
                            <p className="infocard-text p-0 m-0 text-center text-lg-start">
                              {text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-12 col-lg-6">
                      <div 
                        data-aos="fade-up"
                        data-aos-delay="200" 
                        data-aos-anchor-placement="top-bottom"
                        className="infocard h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start"
                      >
                        <p className="infocard-text p-0 m-0">
                          {section.mainText}
                        </p>
                      </div>
                      {section.subTexts.map((text, subIndex) => (
                        <div key={subIndex} className="mt-4">
                          <div 
                            data-aos-delay={200 + (subIndex + 1) * 200} 
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            className="infocard sm-device"
                          >
                            <p className="infocard-text p-0 m-0 text-center text-lg-start">
                              {text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                      <div 
                        data-aos="fade-up"
                        data-aos-delay="200" 
                        data-aos-anchor-placement="top-bottom"
                        className="d-flex justify-content-center"
                      >
                        <img 
                          src={section.image} 
                          alt={`Immagine ${index + 1}`} 
                          className="img-fluid circular-image pointer"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </>
    );
  };
  
  export default Section;
  