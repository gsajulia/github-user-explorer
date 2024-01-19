import { baseUrl } from "../../../src/pages/services/users";

describe('getUserBySearch Integration Test', () => {
    it('fetches user data from GitHub API', () => {
      const username = 'gsajulia';
  
      cy.request('GET', `${baseUrl}/users/${username}`)
        .then((response) => {
            expect(response.body).to.have.property('name');
            expect(response.body).to.have.property('avatar_url');
            expect(response.body).to.have.property('node_id');
            expect(response.body).to.have.property('email');
            expect(response.body).to.have.property('location');
            expect(response.body).to.have.property('followers').and.to.be.a('number');
            expect(response.body).to.have.property('public_repos').and.to.be.a('number');
        });
    });
  });
  