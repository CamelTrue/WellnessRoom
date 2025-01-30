import React, { useEffect, useState } from 'react';
import './styles/components/alertsuccess.scss';

const AlertSuccess = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    const timer2 = setTimeout(() => {
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`alert-success ${fadeOut ? 'fade-out' : ''}`}>
      Messaggio inviato con successo!
    </div>
  );
};

export default AlertSuccess;