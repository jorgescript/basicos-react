import { render, screen } from "@testing-library/react";
import { ComponenteProps } from "../src/ComponenteProps";

describe("Pruebas en el componente ComponenteProps", () => {
  const valor = "Jorge";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<ComponenteProps valor={valor} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor en un <p>", () => {
    render(<ComponenteProps valor={valor} />);
    expect(screen.getByTestId("test-title").innerHTML).toBe(
      `Recibi este valor por Props: ${valor}`
    );
  });
});
