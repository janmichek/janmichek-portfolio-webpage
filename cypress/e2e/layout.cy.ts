describe('Layout Components', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the header with avatar and content', () => {
    cy.get('.the-header').should('be.visible')
    cy.get('.the-header__avatar img').should('be.visible')
    cy.get('.the-header__heading').should('contain', 'Jan Michek')
    cy.get('.the-header__subheading').should('contain', 'web3 frontend engineer')
  })

  it('should display the footer with contact links', () => {
    cy.get('.the-footer').should('be.visible')
    cy.get('.the-footer__link').should('have.length', 4)
    cy.get('.the-footer__link').first().should('have.attr', 'href', 'mailto:jan@janmichek.cz')
    cy.get('.the-footer__link').eq(1).should('have.attr', 'href', 'https://cz.linkedin.com/in/jan-michek-aba913103')
    cy.get('.the-footer__link').eq(2).should('have.attr', 'href', 'https://github.com/janmichek/')
    cy.get('.the-footer__link').eq(3).should('have.attr', 'href', 'https://www.twitter.com/jan_michek')
  })
}) 