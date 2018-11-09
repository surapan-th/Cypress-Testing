describe('PGvim Kapook Login', function () {
  it('successfully loads', function () {
    cy.visit('https://pgvim.kapook.com/pgvim/public/')
    cy.get('.sign-group > [href="https://pgvim.kapook.com/pgvim/public/auth/login"]')
    .click()
	cy.get(':nth-child(2) > input')
	cy.get(':nth-child(3) > input')
	cy.get('.btn-pgvim')
	.click()
	

	  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
	
  })
})