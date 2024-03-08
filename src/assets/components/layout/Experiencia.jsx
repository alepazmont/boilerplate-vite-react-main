/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Experiencia(props) {
  const { trabajos } = props;
  const listaTrabajos = [];

  for (const trabajo of trabajos) {
    listaTrabajos.push(
      <div key={`${trabajo.empresa}-${trabajo.cargo}`}>
        <p><b>Empresa:</b> {trabajo.empresa}<br></br>
        <b>Cargo:</b> {trabajo.cargo}<br></br>
        <b>Lugar:</b> {trabajo.ubicacion}<br></br>
        <b>Fecha:</b> {trabajo.fecha}
        </p>
      </div>
    );
  }

  return <div>
  <hr />
  <h2>Experiencia:</h2>
  {listaTrabajos}
  </div>;
}

export default Experiencia;
