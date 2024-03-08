/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Experiencia from "./assets/components/layout/Experiencia";
import Cabecera from "./assets/components/layout/Cabecera";
import DatosPersonales from "./assets/components/layout/DatosPersonales";
import Formacion from "./assets/components/layout/Formacion";
import Portrait from "./assets/components/common/Portrait";

function App() {
  const trabajosLista = [
    {
      cargo: "Director de publicidad",
      empresa: "SOLKIT - Energías renovables",
      ubicacion: "El Puerto de Santa María, Cádiz, España",
      fecha: "Febrero 2022 - Septiembre 2023"
    },
    {
      cargo: "Director Creativo",
      empresa: "PGRM - Marketing, Comunicación y Sistemas",
      ubicacion: "El Puerto de Santa María, Cádiz, España",
      fecha: "Noviembre 2016 - Diciembre 2021"
    },
    {
      cargo: "Diseñador gráfico y web Freelance",
      empresa: "Inte-grat - Marketing para empresas",
      ubicacion: "El Puerto de Santa María, Cádiz, España",
      fecha: "Noviembre 2013 - Noviembre 2016"
    },
    {
      cargo: "Jefe de Producción y Director Creativo",
      empresa: "Festival Campano - Canción de autor",
      ubicacion: "Chiclana, Cádiz, España",
      fecha: "Agosto 2013 - Agosto 2016"
    },
    {
      cargo: "Jefe de Producción y Director Creativo",
      empresa: "El Ático Atómico, asociación cultural",
      ubicacion: "El Puerto de Santa María, Cádiz, España",
      fecha: "Julio 2011 - Noviembre 2013"
    }
  ];
  
  const datosDeContacto = {
    nombre: "Alejandro Paz",
    fecha: "24/07/1989",
    lugar: "El Puerto de Santa María",
  };

  const formacionLista = [
    {
      nombreCurso: "Full Stack Developer",
      horas: 250,
      tipoCurso: "Bootcamp ONLINE",
      institucion: "Upgrade Hub",
      fecha: "Cursando actualmente",
    },
    {
      nombreCurso: "Confección y publicación de páginas web",
      horas: 480,
      tipoCurso: "Certificado de Profesionalidad ONLINE",
      institucion: "Fundación Vértice",
      fecha: "Junio 2017",
    },
    {
      nombreCurso: "Google Activate Emprendimiento",
      horas: 24,
      tipoCurso: "Curso PRESENCIAL",
      institucion: "TEAMLABS",
      fecha: "Mayo 2017",
    },
    {
      nombreCurso: "Sistemas de gestión CRM-ERP Dolibarr",
      horas: 44,
      tipoCurso: "Curso ONLINE",
      institucion: "2byte",
      fecha: "Abril 2017",
    },
    {
      nombreCurso: "Google Activate Marketing Digital",
      horas: 40,
      tipoCurso: "Curso PRESENCIAL",
      institucion: "IAB",
      fecha: "Mayo 2013",
    },
    {
      nombreCurso: "Gestión de Festivales de Música",
      horas: 50,
      tipoCurso: "Curso ONLINE",
      institucion: "Plataforma/C",
      fecha: "Julio 2012",
    },
    {
      nombreCurso: "Indesign CS4 y Photoshop CS4",
      horas: 60,
      tipoCurso: "Curso ONLINE",
      institucion: "Educate",
      fecha: "Mayo 2012",
    },
    {
      nombreCurso: "Excel Avanzado",
      horas: 75,
      tipoCurso: "Curso ONLINE",
      institucion: "Audiolis",
      fecha: "Abril 2010",
    },
    {
      nombreCurso: "Word Avanzado",
      horas: 30,
      tipoCurso: "Curso PRESENCIAL",
      institucion: "Maforem",
      fecha: "2010",
    },
    {
      nombreCurso: "Grado Superior en Gráfica Publicitaria",
      tipoCurso: "Ciclo Formativo de Grado Superior",
      institucion: "Escuela de Artes de Jerez de la Frontera",
      fecha: "Inacabado",
    },
  ];

  const imagenPerfil = "./public/img/user_kids_avatar_user_profile_icon_149314.png";

  return (
    <>
      <Cabecera />
      <Portrait imagen={imagenPerfil} />
      <DatosPersonales datos={datosDeContacto} />
      <Experiencia trabajos={trabajosLista} />
      <Formacion formacion={formacionLista} />
    </>

  );
}

export default App;
