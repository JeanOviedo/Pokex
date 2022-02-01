import React, {Fragment, useState} from 'react';
import {PaginadorOK} from '../Redux/Actions';
import {useSelector, useDispatch} from "react-redux";
import Derecha from "../Icos/der.png"
import DerechaNO from "../Icos/derno.png"
import Izquierda from "../Icos/izq.png"
import IzquierdaNO from "../Icos/izqno.png"
export default function Paginados({pagina, setPagina, maximo}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState(1);


    const nextPage = () => {
        dispatch(PaginadorOK(parseInt(pagina) + 1));
        setInput(parseInt(input) + 1);
        // setPagina ();
    };

    const previousPage = () => {
        dispatch(PaginadorOK(parseInt(pagina) - 1));
        setInput(parseInt(input) - 1);
        // setPagina (parseInt(pagina) - 1);
    };

    const onKeyDown = e => {
        if (e.keyCode == 13) {
            setPagina(parseInt(e.target.value));
            dispatch(PaginadorOK(e.target.value));
            if (parseInt(e.target.value < 1) || parseInt(e.target.value) > Math.ceil(maximo) || isNaN(parseInt(e.target.value))) {
                setPagina(1);
                setInput(1);
            } else {
                setPagina(parseInt(e.target.value));
            }
        }
    };

    const onChange = e => {
        setInput(e.target.value);
    };

    return (<Fragment> {
        pagina === 1 || pagina < 1 ? (<img src={IzquierdaNO}
          
          style={
              {
                  width: "6%",
                  textAlign: 'left',
                  cursor: 'not-allowed',
                  zIndex: '8',
                  position: 'fixed'
              }
          }/>) : (<img src={Izquierda}
            onClick={previousPage}
            style={
                {
                    width: "6%",
                    textAlign: 'left',
                    cursor: 'pointer',
                    zIndex: '8',
                    position: 'fixed'
                }
            }/>)
    }


        <input onChange={
                e => onChange(e)
            }
            onKeyDown={
                e => onKeyDown(e)
            }
            name="page"
            autoComplete="off"
            value={input}
            type="hidden"/> {
        pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo) ? (<img src={DerechaNO}
            style={
                {
                    width: "6%",
                    textAlign: 'right',
                    right: ' 0%',
                    cursor: 'not-allowed',
                    zIndex: '8',
                    position: 'fixed'
                }
            }/>) : <img src={Derecha}
            onClick={nextPage}
            style={
                {
                    width: "6%",
                    textAlign: 'right',
                    right: ' 0%',
                    cursor: 'pointer',
                    zIndex: '8',
                    position: 'fixed'
                }
            }/>
    } </Fragment>);
}
