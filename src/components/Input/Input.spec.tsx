import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  const mockData = {
    id: "test-input",
    onChange: jest.fn(),
    placeholder: "Enter text",
  };

  it("should call onChange when the input value changes", () => {
    render(<Input {...mockData} />);
    const inputElement: HTMLInputElement = screen.getByTestId("test-input");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(inputElement.value).toBe("new value");
  });

  it("displays the correct value", () => {
    render(<Input {...mockData} value="Current text" />);
    expect(screen.getByRole("textbox")).toHaveValue("Current text");
  });

  it("should allow search to be erased", () => {
    render(<Input {...mockData} />);
    const inputElement: HTMLInputElement = screen.getByTestId("test-input");
    fireEvent.change(inputElement, { target: { value: "gsajulia" } });
    expect(inputElement.value).toBe("gsajulia");
    fireEvent.change(inputElement, { target: { value: "" } });
    expect(inputElement.value).toBe("");
  });
});
