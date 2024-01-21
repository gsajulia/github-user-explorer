import { baseUrl } from "../../../src/services/users";

describe('getUserBySearch Error Handling', () => {
  it('handles github search input with no result', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/`,
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.eq(404); 
    });
  });
});
