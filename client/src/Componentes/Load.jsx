import React from "react";
import Loading from "../Icos/loader.gif";
import Loading2 from "../Icos/loader2.gif";
export default function Load() {
    return (
        <div className="general">
            <br/><br/>
            <div>
                <img src={Loading}
                    className="load"
                    alt={Loading}/> {" "}<br/>
             <img src={Loading2}
                    className="load2"
                    alt={Loading2}/>
            </div>


        </div>
    );
}
