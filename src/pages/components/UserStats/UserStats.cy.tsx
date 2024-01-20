/// <reference types="cypress" />
import UserStats from "./UserStats";
import styles from "./UserStats.module.css";
import star from "../../../../public/star.png";
import starNotFilled from "../../../../public/starNotFilled.png";

describe("<UserStats />", () => {
  it("renders with provided props", () => {
    const followers = 10;
    const repositories = 8;
    const popularityScore = [1, 1, 1, 1, 1];

    cy.mount(
      <UserStats
        followers={followers}
        repositories={repositories}
        popularityScore={popularityScore}
      />
    );

    cy.get(`.${styles.userStats}`).should("exist");

    cy.contains("Followers:").next().should("have.text", followers.toString());
    cy.contains("Repositories:")
      .next()
      .should("have.text", repositories.toString());

    cy.get(`.${styles.popularityIcon}`).should("have.length", 5);

    cy.wrap(popularityScore).each((score, index) => {
      if (score) {
        cy.get(`.${styles.popularityIcon}`)
          .eq(index)
          .should("have.attr", "src", star);
      } else {
        cy.get(`.${styles.popularityIcon}`)
          .eq(index)
          .should("have.attr", "src", starNotFilled);
      }
    });
  });
});
