describe("Users actions on gitHub user search page", () => {
  it("executes a complete search flow", () => {
    cy.visit("/");

    cy.get('input[type="text"]').type("gsajulia");
    cy.get('button[type="submit"]').click();

    cy.get("[data-testid=spinner-component]").should("exist");
    cy.wait(3000);
    cy.get("[data-testid=spinner-component]").should("not.exist");

    cy.get("h2").should("contain", "Júlia Gabriela Santi Acosta");
    cy.get("span").should("contain", "Taubaté, SP");

    cy.contains("Followers:").next().should("exist");
    cy.contains("Repositories:").next().should("exist");

    cy.get('img[alt="Star icon"]').should('have.length', 5);
    cy.get('img[alt="Star not filled icon"]').should('not.exist');
  });
});
