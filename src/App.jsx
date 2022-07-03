import { ComponenteProps } from "./ComponenteProps";

export const App = () => {
  const contenido = {
    titulo: "Hola mundo",
    parrafo: "Bienvenido a Reactjs",
  };
  return (
    <>
      <h1>{contenido.titulo}</h1>
      <p>{contenido.parrafo}</p>
      <ComponenteProps valor="Jorge" />
    </>
  );
};
