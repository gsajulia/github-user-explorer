/// <reference types="cypress" />
import Button from "./Button";
import styles from "./Button.module.css";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button>Click me</Button>);
    cy.get(`button.${styles.button}`).should("exist");
    cy.contains("Click me").should("exist");
  });

  it("handles click events", () => {
    const onClick = cy.spy().as("onClickSpy");
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    cy.contains("Click me").click();
    cy.get("@onClickSpy").should("have.been.called");
  });

  it("is disabled when disabled prop is true", () => {
    cy.mount(<Button disabled>Disabled Button</Button>);
    cy.contains("Disabled Button").should("be.disabled");
  });
});
