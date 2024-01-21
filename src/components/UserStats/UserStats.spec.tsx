import { render, screen } from "@testing-library/react";
import UserStats from "./UserStats";

describe("UserStats Component", () => {
  const popularityScore = [1, 1, 1, 0, 0];

  it("renders the correct number of followers and repositories", () => {
    render(
      <UserStats
        followers={100}
        repositories={50}
        popularityScore={popularityScore}
      />
    );
    expect(screen.getByText("Followers:")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("Repositories:")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });

  it("always renders five stars icon", () => {
    render(
      <UserStats
        followers={100}
        repositories={50}
        popularityScore={popularityScore}
      />
    );
    const stars = screen.getAllByAltText(/star/i);
    expect(stars.length).toBe(5);
  });

  it("displays filled and not filled stars correctly based on popularity score", () => {
    render(
      <UserStats
        followers={100}
        repositories={50}
        popularityScore={popularityScore}
      />
    );
    const filledStars = screen.getAllByAltText("Star icon");
    const notFilledStars = screen.getAllByAltText("Star not filled icon");

    expect(filledStars.length).toBe(
      popularityScore.filter((rating) => rating === 1).length
    );
    expect(notFilledStars.length).toBe(
      popularityScore.filter((rating) => rating === 0).length
    );
  });
});
