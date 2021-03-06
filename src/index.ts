import Calculator from "./components/Calculator/Calculator";

window.onload = () => {
  const container = document.querySelector("#root") as HTMLDivElement;

  const calculator = new Calculator();

  const root = calculator.render();

  container.append(root);
};
