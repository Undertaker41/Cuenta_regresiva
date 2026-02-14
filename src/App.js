import React, { useState, useEffect } from 'react';
import './App.css';

const ContadorSencillo = () => {
  const [tiempo, setTiempo] = useState({ h: '00', m: '00', s: '00' });
  const [esHora, setEsHora] = useState(false);

  useEffect(() => {
    const calcular = () => {
      const ahora = new Date();
      const meta = new Date();
      meta.setHours(19, 30, 0, 0);

      const dif = meta - ahora;

      if (dif <= 0) {
        setEsHora(true);
        return;
      }

      const f = (n) => n.toString().padStart(2, '0');

      setTiempo({
        h: f(Math.floor((dif / (1000 * 60 * 60)) % 24)),
        m: f(Math.floor((dif / (1000 * 60)) % 60)),
        s: f(Math.floor((dif / 1000) % 60))
      });
    };

    const t = setInterval(calcular, 1000);
    calcular();
    return () => clearInterval(t);
  }, []);

  return (
    <div className="wrapper-principal">
      <div className="decoracion"></div>
      
      <div className="contenedor-cita">
        {!esHora ? (
          <>
            <p className="titulo-cita">Cuenta regresiva para nuestra cita mi amor</p>
            <p className="titulo-cita">Gracias por esperar, mi amor. Estoy emocionado de verte a las 7:30 PM. Te amo mucho y no puedo esperar para compartir este momento contigo.</p>
            <h1 className="subtitulo-cita">Te amoooooo</h1>
            
            <div className="reloj-grid">
              <div className="unidad-tiempo">
                <span className="numero">{tiempo.h}</span>
                <span className="etiqueta">Horas</span>
              </div>
              <div className="unidad-tiempo">
                <span className="numero">{tiempo.m}</span>
                <span className="etiqueta">Minutos</span>
              </div>
              <div className="unidad-tiempo">
                <span className="numero">{tiempo.s}</span>
                <span className="etiqueta">Segundos</span>
              </div>
            </div>
          </>
        ) : (
          <div className="mensaje-final">
            ¡Llegó el momento!
            Gracias por hacer mi vida mucho mas feliz. Es algo que te agradecere toda mi vida
                        
          </div>
        )}
      </div>
    </div>
  );
};

export default ContadorSencillo;