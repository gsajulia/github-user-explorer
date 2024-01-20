/// <reference types="cypress" />
import Input from "./Input";
import styles from "./Input.module.css";

describe("<Input />", () => {
  const defaultProps = {
    id: "test-input",
    placeholder: "Enter text",
  };

  it("renders", () => {
    cy.mount(<Input onChange={() => {}} {...defaultProps} />);
    cy.get(`input#${defaultProps.id}.${styles.input}`).should("exist");
  });

  it("accepts input", () => {
    const typedText = "gsajulia";
    const onChangeSpy = cy.spy().as("onChangeSpy");

    cy.mount(<Input {...defaultProps} onChange={onChangeSpy} />);

    const inputSelector = `input#${defaultProps.id}.${styles.input} `;
    cy.get(inputSelector)
      .type(typedText)
      .should(($input) => {
        expect($input.val()).to.equal(typedText);
      });

    cy.wait(1000);
    cy.get("@onChangeSpy").should("have.been.called");
  });
});
