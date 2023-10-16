import React from "react";

import Tabla from "../components/Tabla";
import Formulario from "../components/Formulario";

const Alta = () => {
  return (
    <>
      <h1>Formulario de alta de productos</h1>
      <h2>Agregar productos</h2>
      <Formulario />
      <hr />
      <Tabla />
    </>
  );
};

export default Alta;
