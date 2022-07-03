import PropTypes from "prop-types";

export const ComponenteProps = ({ valor }) => (
  <p>Recibi este valor por Props: {valor}</p>
);

ComponenteProps.propTypes = {
  valor: PropTypes.string.isRequired,
};

ComponenteProps.defaultProps = {
  valor: "Valor por default",
};
