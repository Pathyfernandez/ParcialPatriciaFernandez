import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>¡Hola, {data.nombre}!</h2>
      <p>Ya sabemos que tu plato favorito es {data.platoFavorito}.</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    nombre: PropTypes.string,
    platoFavorito: PropTypes.string,
  }).isRequired,
};

export default Card;


