import { render, screen, fireEvent } from "@testing-library/react";
import Light from "./Light";

describe("간단한 테스트 몇가지", () => {
  it("renders Light Component", () => {
    render(<Light name="전원" />);
    const nameElement = screen.getByText(/전원 off/i);
    expect(nameElement).toBeInTheDocument();
  });
  it("off button disabled", () => {
    render(<Light name="전원" />);
    const offButtonElement = screen.getByRole("button", { name: "OFF" });
    expect(offButtonElement).toBeDisabled();
  });
  it("on button enable", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    expect(onButtonElement).not.toBeDisabled();
  });
  it("change from off to on", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    fireEvent.click(onButtonElement);
    expect(onButtonElement).toBeDisabled();
  });
});
