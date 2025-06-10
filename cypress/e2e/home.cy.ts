describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the home page', () => {
    cy.get('body').should('be.visible')
  })

  // Add more specific tests based on your homepage content
  // Example:
  // it('should display the main navigation', () => {
  //   cy.get('nav').should('be.visible')
  // })
}) 