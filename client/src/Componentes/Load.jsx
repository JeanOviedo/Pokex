import React from "react";
import Loading from "../Icos/loader.gif";

export default function Load() {
    return (
        <div className="general">
            <br/><br/>
            <div>
                <img src={Loading}
                    className="load"
                    alt={Loading}/> {" "}<br/>
                <p>
                    Cargando Datos...{" "} </p>
            </div>


        </div>
    );
}
