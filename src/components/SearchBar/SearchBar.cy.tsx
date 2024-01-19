/// <reference types="cypress" />
import styles from "./SearchBar.module.css";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("renders correctly", () => {
    cy.mount(
      <SearchBar
        searchTerm=""
        onSearchTermChange={() => {}}
        onSearch={() => {}}
      />
    );

    cy.get(`.${styles.searchForm}`).should("exist");
    cy.get("#github-user-search").should("exist");
    cy.get('button[type="submit"]').contains("Search").should("exist");
  });

  it("allows input and triggers search", () => {
    const onSearchTermChange = cy.spy().as("onSearchTermChangeSpy");
    const onSearch = cy.spy().as("onSearchSpy");

    cy.mount(
      <SearchBar
        searchTerm=""
        onSearchTermChange={onSearchTermChange}
        onSearch={onSearch}
      />
    );

    cy.get("#github-user-search").type("test user");
    cy.get("@onSearchTermChangeSpy").should("have.been.called");

    cy.get('button[type="submit"]').click();
    cy.get("@onSearchSpy").should("have.been.called");
  });
});
