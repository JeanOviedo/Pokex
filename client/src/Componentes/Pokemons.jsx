import React from "react";
import { Link } from "react-router-dom";
export default function Pokemons({ todos }) {
  return (
    <ul>
      {todos
        ? todos.map((todo) => { console.log(todos);
            return (
               
              <div className="card" key={todo.id}>
                <center>
                  <br />
                  <br />
                  <br /> <br /> <br /> <br />
                  
                  <h3> {todo.name}</h3>
                  {todo.images.md == "" ? (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png"
                      className="card-image"
                      alt="..."
                    />
                  ) : (
                    <img
                      src={todo.images.md}
                      className="card-image"
                      alt="..."
                    />
                  )}
                  <Link to={`/pokemons/${todo.id}`}>
                    <button className="boton">Detalles</button>
                  </Link>
                </center>
              </div>
            );
          })
        : ""}
    </ul>
  );
}
