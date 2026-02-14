import React, { useState, useEffect } from 'react';
import './App.css';

const ContadorSencillo = () => {
  const [tiempo, setTiempo] = useState({ h: '00', m: '00', s: '00' });
  const [esHora, setEsHora] = useState(false);
  const [cartaAbierta, setCartaAbierta] = useState(false); // Nuevo estado para el botón

  // --- CONFIGURA TU CARTA AQUÍ ---
  const mensajeCarta = `Mi amor,
  
 Aunque no lo creas el día de san Valentín, es una fecha que nos representa más de lo común, históricamente Valentín desafió la orden de Claudio II, que vetaba matrimonios para formar mejores soldados solteros, celebrando uniones secretas por creer en el amor como fuerza superior. Este día representa un amor desafiante, somos dos personas que priorizaron el amor ante cualquier tipo de repercusión, para mí representa sacrificó por el amor, y yo daría mi vida por ti, cambiaría mi vida por tenerte en ella.

 Sé que aveces me cuesta entender tu manera de amarme pero las veces que has tenido que demostrar mi amor por ti, lo has hecho, y estoy muy orgulloso de ser tu novio y poder tener este tipo de cenas y salidas contigo, aunque peleemos mucho, sin duda eres lo mejor que me ha pasado en la vida, se que soy buena persona porque te tengo, he escuchado que a las buenas personas le pasan buenas cosas, yo seré la mejor persona del mundo porque tú eres lo mejor que le puede pasar a alguien, soy más tuyo de lo que he sido de cualquier otra persona incluyéndome a mi mismo, te amo y nunca en mi vida podré volver a pronunciar esa frase sin tener que pensarte. `;
  // -------------------------------

  useEffect(() => {
    const calcular = () => {
      const ahora = new Date();
      const meta = new Date();
      meta.setHours(20, 0, 0, 0); // Ajusta la hora de tu cita aquí

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
      {!esHora ? (
        /* VISTA DEL CONTADOR */
        <div className="contenedor-cita">
          <p className="titulo-cita">Feliz San Valentin</p>
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
        </div>
      ) : !cartaAbierta ? (
        /* VISTA DEL BOTÓN (Se activa cuando llega la hora) */
        <div className="contenedor-boton">
          <h1 className="subtitulo-cita">¡Es la hora!</h1>
          <button className="boton-magico" onClick={() => setCartaAbierta(true)}>
            Abrir cartica
          </button>
        </div>
      ) : (
        /* VISTA DE LA CARTA (Se activa al presionar el botón) */
        <div className="carta-abierta">
          <div className="texto-manuscrito">
            {mensajeCarta}
          </div>
          <div className="firma">
            Siempre tuyo Hector
          </div>
        </div>
      )}
    </div>
  );
};

export default ContadorSencillo;