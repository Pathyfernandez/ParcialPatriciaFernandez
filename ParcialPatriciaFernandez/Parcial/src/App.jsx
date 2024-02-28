import React, { useState } from "react";
import Card from "./Card";
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="text"
            name="edad"
            value={formData.edad}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <Card />
    </div>
  );
}

export default App;

