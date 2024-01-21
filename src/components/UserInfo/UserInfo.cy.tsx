/// <reference types="cypress" />
import UserInfo from "./UserInfo";
import { IUserInfo } from "./UserInfo.types";

describe("<UserInfo />", () => {
  const mockUserInfo: IUserInfo = {
    image: "https://example.com/user-image.jpg",
    name: "Filomena",
    email: "filomena@example.com",
    location: "São Paulo, BR",
  };

  it("renders correctly with given props", () => {
    cy.mount(<UserInfo {...mockUserInfo} />);
    cy.get("img").should("be.visible");

    cy.get("h2").should("contain", mockUserInfo.name);

    cy.get("span").eq(0).should("contain", mockUserInfo.email);

    cy.get("span").eq(1).should("contain", mockUserInfo.location);
  });
});
