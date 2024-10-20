// ContactUs.jsx
import React, { useState, useRef, useEffect, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null);

  // Funzione per aprire/chiudere il modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Funzione per inviare l'email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_70l4qtt', // Sostituisci con il tuo Service ID
        'template_b2iqhu4', // Sostituisci con il tuo Template ID
        formRef.current,
        'WVQP2anuZornvOc5K' // Sostituisci con il tuo Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Messaggio inviato con successo!');
          toggleModal();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('C\'è stato un errore nell\'invio del messaggio.');
        }
      );
  };

  // Inizializza AOS e aggiorna quando il componente monta
  useEffect(() => {
    AOS.refresh(); // Aggiorna AOS per riconoscere nuovi elementi
  }, []);

  // Memoizza il bottone per evitare re-render inutili
  const contactButton = useMemo(() => (
    <button
      data-aos="fade-left"
      data-aos-delay="600"
      data-aos-duration="1000"
      className="contact-button"
      onClick={toggleModal}
    >
      Contattami
    </button>
  ), [toggleModal]);

  return (
    <div className="contact-us-container">
      {contactButton}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Previene la chiusura del modal quando si clicca all'interno
          >
            <div className="modal-header">
              <h2>Contattaci</h2>
              <button className="close-button" onClick={toggleModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="user_name">Nome</label>
                  <input className="input-style" type="text" id="user_name" name="user_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input className="input-style" type="email" id="user_email" name="user_email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea className="input-style" id="message" name="message" required></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="send-button">
                    Invia
                  </button>
                  <button type="button" className="cancel-button" onClick={toggleModal}>
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
