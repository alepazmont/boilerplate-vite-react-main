/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function DatosPersonales(props) {

  const datos = props.datos;

  return (
    <div>
      <ul>
        <li>
            <b>Nombre:</b> {datos.nombre}
        </li>
        <li>
            <b>Fecha de nacimiento:</b> {datos.fecha}
        </li>
        <li>
            <b>Lugar de nacimiento:</b> {datos.lugar}
        </li>
      </ul>
    </div>
  )
}

export default DatosPersonales
