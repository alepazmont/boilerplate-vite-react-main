/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Formacion(props) {
    const { formacion } = props;
    const listaFormacion = [];

    for (const curso of formacion) {
        listaFormacion.push(
            <div key={`${curso.nombreCurso}`}>
                <p>
                    <b>Nombre:</b> {curso.nombreCurso}<br />
                    <b>Horas:</b> {curso.horas}<br />
                    <b>Tipo de curso:</b> {curso.tipoCurso}<br />
                    <b>Institución:</b> {curso.institucion}<br />
                    <b>Fecha:</b> {curso.fecha}<br />
                </p>
            </div>
        );
    }

    return (
        <div>
        <hr />
        <h2>Formación</h2>
            {listaFormacion}
        </div>
    );
}

export default Formacion;
