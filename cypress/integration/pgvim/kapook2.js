describe('PGvim Kapook Login', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://pgvim.kapook.com/pgvim/public/')
	cy.get('.sign-group > [href="https://pgvim.kapook.com/pgvim/public/auth/login"]')

    .click()

    // Get an input, type into it and verify that the value has been updated
    cy.get(':nth-child(2) > input')
      .type('pichi.kudo@gmail.com')
      .should('have.value', 'pichi.kudo@gmail.com')
	  
	cy.get(':nth-child(3) > input')
      .type('asdasd')
      .should('have.value', 'asdasd')
	  
	cy.get('.btn-pgvim')
	.click()
  })
})