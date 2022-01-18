import React from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import Imagenc from "../../src/img-opacity50.png";

export default function Contacto() {
  return (
    <div className="general">
      <center><br/><br/><br/><br/>
        <h1>Contacto</h1>
      </center>
      <div>
        <div>
          {" "}<br/>
          <p>
            Muchas gracias por pasar por acá, no te olvides de pasar por mis
            redes para que estemos en contacto, o visita mi web{" "}
            <h3>
              <a href="https://www.jeanoviedo.com" target="_blank">
                www.JeanOviedo.com
              </a>
            </h3>
          </p>
        </div>
        <div>
          {" "}
          <center>
            <img src={Imagenc} className="jeanoviedo" alt="..." />
          </center>
        </div>
      </div>
    </div>
  );
}
