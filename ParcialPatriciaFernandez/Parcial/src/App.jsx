import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    platoFavorito: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    platoFavorito: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const { nombre, platoFavorito } = formData;
    let newErrors = {};

    if (nombre.length < 3 || nombre.trim() !== nombre) {
      newErrors = { ...newErrors, nombre: "Por favor, ingresa al menos 3 caracteres sin espacios al comienzo." };
    }

    if (!platoFavorito) {
      newErrors = { ...newErrors, platoFavorito: "Por favor, ingresa tu plato favorito." };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <div className="App">
      <h1>Cuentanos Algo de Ti!!! </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </label>
        <br />
        <label>
          Escribe tu plato favorito:
          <input
            type="text"
            name="platoFavorito"
            value={formData.platoFavorito}
            onChange={handleInputChange}
          />
          {errors.platoFavorito && <p className="error">{errors.platoFavorito}</p>}
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {Object.keys(errors).length === 0 && <Card data={formData} />}
    </div>
  );
}

export default App;

