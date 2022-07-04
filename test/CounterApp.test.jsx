import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el componente CounterApp", () => {
  const value = 100;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor de inicial de 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(100)).toBeTruthy();
  });
});
