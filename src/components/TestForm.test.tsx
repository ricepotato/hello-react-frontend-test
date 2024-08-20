import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TestForm } from "./TestForm";

test("이름을 표시한다", () => {
  const name = "ricepotato";
  render(<TestForm name={name} />);
  expect(screen.getByText(name)).toBeInTheDocument();
});
