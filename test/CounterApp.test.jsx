import { fireEvent, render, screen } from "@testing-library/react";
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

  test("Debe de incrementar el valor en 1 con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(101)).toBeTruthy();
  });

  test("Debe de decrementar el valor en 1 con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(99)).toBeTruthy();
  });

  test("Debe de reiniciar el valor al original", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText(100)).toBeTruthy();
  });
});
