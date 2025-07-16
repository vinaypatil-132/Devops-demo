import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./Navbar";
import "@testing-library/jest-dom";

describe("NavBar Component", () => {
  test("renders with name and roll props", () => {
    render(<NavBar name="Vinay" roll="123" />);

    expect(screen.getByText((_, element) =>
      element.textContent === "Welcome, Vinay 👋"
    )).toBeInTheDocument();

    expect(screen.getByText((_, element) =>
      element.textContent === "Your Roll Number is 123"
    )).toBeInTheDocument();
  });


  test("increments and decrements the count", () => {
    render(<NavBar name="Vinay" roll="123" />);

    const plusOneButton = screen.getByText("+1 Click");
    const minusOneButton = screen.getByText("-1 Click");
    const countText = () => screen.getByText(/You clicked/i);

    // Initial state
    expect(countText()).toHaveTextContent("You clicked 0 times");

    // Increment by 1
    fireEvent.click(plusOneButton);
    expect(countText()).toHaveTextContent("You clicked 1 time");

    // Decrement by 1
    fireEvent.click(minusOneButton);
    expect(countText()).toHaveTextContent("You clicked 0 times");
  });

  test("reset button resets the count to 0", () => {
    render(<NavBar name="Vinay" roll="123" />);

    const plusTwoButton = screen.getByText("+2 Click");
    const resetButton = screen.getByText("Reset");

    // Click +2 twice => count = 4
    fireEvent.click(plusTwoButton);
    fireEvent.click(plusTwoButton);

    expect(
      screen.getByText(
        (_, element) => element.textContent === "You clicked 4 times."
      )
    ).toBeInTheDocument();

    // Reset => count = 0
    fireEvent.click(resetButton);
    expect(
      screen.getByText(
        (_, element) => element.textContent === "You clicked 0 times."
      )
    ).toBeInTheDocument();
  });

  test("theme toggle changes icon and text", () => {
    render(<NavBar name="Vinay" roll="123" />);

    const toggleButton = screen.getByTestId("theme-toggle");

    // Default mode is light, so icon should be 🌙 (suggesting to go dark)
    expect(toggleButton).toHaveTextContent("🌙");
    expect(toggleButton).toHaveTextContent("Dark");

    // Click to switch to dark mode
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent("🌞");
    expect(toggleButton).toHaveTextContent("Light");
  });
});
