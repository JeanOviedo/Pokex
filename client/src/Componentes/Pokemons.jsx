import React from "react";
import { Link } from "react-router-dom";

export default function Pokemons({ todos }) {
  return (
    <ul>
      <br /> <br />
      <br />
      <br />
      <h1>Pokemones</h1>
      {todos
        ? todos.map((todo) => {
            console.log(todos.count);
            return (
              <div className="card" key={todo.results.name}>
                <center>
                  <br />
                  <br />
                  <br /> <br /> <br /> <br />
                  <h3> {todo.results.name}</h3>
                  {todo.images.md === "" ? (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png"
                      className="card-image"
                      alt="..."
                    />
                  ) : (
                    ""
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
