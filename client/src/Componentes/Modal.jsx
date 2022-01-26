import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ActionCerrarModal } from "../Redux/Actions";

export default function Modal({ nombre, mensaje, image, boton, accion }) {
  const REDUXmodal = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  function handleSubmitCerrarModal(event) {
    event.preventDefault();
    dispatch(ActionCerrarModal());
    //setTexto("");
  }

  return (
    <Fragment>
     {nombre ? (<div className="modal"><div>
       <h1>{nombre}</h1>
        <img src={`${image}`} alt={mensaje} className="card-image" />
        <h1>{mensaje}</h1>
        <button
          className="close"
          type="submit"
          onClick={(evento) => {
            handleSubmitCerrarModal(evento);
          }}
        >
          X
        </button>
      </div></div>
      ) : (<div className="modal">
      <div>
       
        <h1>{REDUXmodal.nombre}</h1>
        <img
          src={`${REDUXmodal.image}`}
          alt={REDUXmodal.mensaje}
          className="card-image"
        />
        <h1>{REDUXmodal.mensaje}</h1>
        <button
          className="close"
          type="submit"
          onClick={(evento) => {
            handleSubmitCerrarModal(evento);
          }}
        >
          X
        </button>
      </div></div>
      )}
      
      </Fragment>
  ); }
  
