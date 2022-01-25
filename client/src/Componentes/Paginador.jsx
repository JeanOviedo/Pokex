import React from "react";

export default function Paginador({
  pokemonesPerPage,
  allPokemones,
  paginado,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemones / pokemonesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginado(number)} key={number}>
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
