import React, { useState, useRef, useEffect } from 'react';
import AlertSuccess from './AlertSuccess';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
  const lastScrollY = useRef(window.pageYOffset);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_70l4qtt',
        'template_b2iqhu4',
        formRef.current,
        'WVQP2anuZornvOc5K'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          formRef.current.reset();
          toggleModal();
          setIsSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("C'è stato un errore nell'invio del messaggio.");
        }
      );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inizializza lo stato in base alla posizione iniziale

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blocca lo scroll quando il modal è aperto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <>
      {/* Barra ContactUs */}
      <div className={`contact-us-bar ${isVisible ? 'visible' : 'hidden'}`}>
        <a href="#" className="logo-container">
          <img className='logo-nav-item' src='/media/change-logo.png' alt="Logo" />
        </a>
        <button
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="contact-button"
          onClick={toggleModal}
        >
          Contattami
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
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
                  <input
                    className="input-style"
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input
                    className="input-style"
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea
                    className="input-style"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="send-button">
                    Invia
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={toggleModal}
                  >
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* AlertSuccess */}
      {isSuccess && <AlertSuccess />}
    </>
  );
};

export default ContactUs;
