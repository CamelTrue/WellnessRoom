import React, { useEffect, useState } from 'react';

const AlertSuccess = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // Tempo prima di iniziare il fade out

    const timer2 = setTimeout(() => {
      // Qui puoi implementare la rimozione del componente se necessario
      // Ad esempio, usando un callback o un context
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
