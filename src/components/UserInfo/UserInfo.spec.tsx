import { render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";

describe("UserInfo Component", () => {
  const mockData = {
    image: "https://example.com/user-image.jpg",
    name: "Jessie",
    email: "jessie@example.com",
    location: "New York, NY",
    githubUrl: "https://github.com/jessie",
  };

  it("should display user information correctly", () => {
    render(<UserInfo {...mockData} />);

    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.email)).toBeInTheDocument();
    expect(screen.getByText(mockData.location)).toBeInTheDocument();
  });
});
