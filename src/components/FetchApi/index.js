import React, { useEffect, useState } from "react";
import "./style.css";
function FetchApi() {
  const [nutrients, setNutrients] = useState([]);
  useEffect(() => {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setNutrients(json);
        // console.log(json);
      });
  }, []);
  return (
    <div className="container">
      <header className="headerFetch">
        React Nutri
      </header>
      {
        nutrients.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa" />
              <p className="subtitulo">
                {item.subtitulo}
              </p>
              <a href='#' className="botao">Acessar</a>
            </article>
          )
        })
      }
    </div>
  )
}
export default FetchApi;