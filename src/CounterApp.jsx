import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [state, setState] = useState(value);
  const handleAdd = () => setState(state + 1);
  const handleSubstract = () => setState(state - 1);
  const handleReset = () => setState(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{state}</h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
