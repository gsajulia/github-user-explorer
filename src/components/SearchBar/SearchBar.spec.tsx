import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  const mockOnSearchTermChange = jest.fn();
  const mockOnSearch = jest.fn();

  it("renders input and button", () => {
    render(
      <SearchBar
        searchTerm=""
        onSearchTermChange={mockOnSearchTermChange}
        onSearch={mockOnSearch}
      />
    );
    expect(screen.getByLabelText("USER")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    render(
      <SearchBar
        searchTerm=""
        onSearchTermChange={mockOnSearchTermChange}
        onSearch={mockOnSearch}
      />
    );
    const input = screen.getByLabelText("USER");
    fireEvent.change(input, { target: { value: "new search term" } });
    expect(mockOnSearchTermChange).toHaveBeenCalledTimes(1);
  });

  it("calls onSearch when button is clicked", () => {
    render(
      <SearchBar
        searchTerm=""
        onSearchTermChange={mockOnSearchTermChange}
        onSearch={mockOnSearch}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: "Search" }));
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });
});
