import React, { useState, useRef, useEffect } from 'react';
import './styles/components/contactus.scss';
import AlertSuccess from './AlertSuccess';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef(null);
  const lastScrollY = useRef(window.pageYOffset);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 400);
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
          formRef.current.reset();
          closeModal(); 
          setIsSuccess(true);
        },
        (error) => {
          alert("C'è stato un errore nell'invio del messaggio.");
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isModalOpen ? 'hidden' : 'auto';
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
      <div className={`contact-us-bar ${isVisible ? 'visible' : 'hidden'}`}>
        <a href="#" className="logo-container">
          <img className='logo-nav-item' src='/media/change-logo.png' alt="Logo" />
        </a>
        <button className="contact-button" onClick={openModal}>
          Contattami
        </button>
      </div>

      {isModalOpen && (
        <div
          className={`modal-overlay ${isClosing ? 'fade-out-overlay' : ''}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${isClosing ? 'fadeOutScale' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 className="form-contact-title">Contattaci</h2>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="user_name">Nome</label>
                  <input
                    className="input-style pointer"
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder='Inserisci il tuo nome..'
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input
                    className="input-style pointer"
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder='Inserisci la tua email..'
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea
                    className="input-style pointer"
                    id="message"
                    name="message"
                    placeholder='Comunicaci la tua richiesta..'
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
                    onClick={closeModal}
                  >
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isSuccess && <AlertSuccess />}
    </>
  );
};

export default ContactUs;
