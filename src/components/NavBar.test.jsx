import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./Navbar";
import "@testing-library/jest-dom"; // for extra matchers

describe("NavBar Component", () => {
  test("renders welcome message with name and roll", () => {
    render(<NavBar name="Vinay" roll="123" />);

    expect(screen.getByText(/Welcome, Vinay/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Roll Number is/i)).toBeInTheDocument();
  });

  test("increases counter on button click", () => {
    render(<NavBar name="Vinay" roll="123" />);

    const button = screen.getByText("+1 Click");
    fireEvent.click(button);

    expect(screen.getByText(/You clicked 1/i)).toBeInTheDocument();
  });

  test("resets counter on reset button click", () => {
    render(<NavBar name="Vinay" roll="123" />);

    fireEvent.click(screen.getByText("+1 Click"));
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByText(/You clicked 0/i)).toBeInTheDocument();
  });

test("theme toggle updates icon", () => {
  render(<NavBar name="Vinay" roll="123" />);
  const themeButton = screen.getByTestId("theme-toggle");

  fireEvent.click(themeButton);

  expect(screen.getByLabelText("sun")).toBeInTheDocument();
});

});
