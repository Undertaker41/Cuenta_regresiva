import React, { useState, useEffect } from 'react';
import './App.css';

const ContadorSencillo = () => {
  const [tiempo, setTiempo] = useState({ h: '00', m: '00', s: '00' });
  const [esHora, setEsHora] = useState(false);

  useEffect(() => {
    const calcular = () => {
      const ahora = new Date();
      const meta = new Date();
      meta.setHours(19, 30, 0, 0); // Ajusta aquí la hora de tu cita

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
      <div className="contenedor-cita">
        {!esHora ? (
          <>
            <p className="titulo-cita">feliz San valentin</p>
                        <h1 className="subtitulo-cita">Te amoooooo</h1>
            <p className="dedicatoria">
              Gracias por esperar, y aceptar ser mi cita reina. Estoy emocionado de verte. 
                Te amo mucho y no puedo esperar para compartir contigo.
                Ya solo falta:

            </p>




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
            <b>¡El momento es ahora!</b>
            <p className="dedicatoria">
              Gracias por hacer mi vida mucho más feliz. 
              Es algo que te agradeceré toda mi vida.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContadorSencillo;