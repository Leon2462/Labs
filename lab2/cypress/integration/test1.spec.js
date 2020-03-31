describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/')

    cy.get('td#0')
      .click()

    cy.get('td#1')
      .click()

    cy.get('td#3')
      .click()

    cy.get('td#4')
      .click()

    cy.get('td#6')
      .click()
  })
})
