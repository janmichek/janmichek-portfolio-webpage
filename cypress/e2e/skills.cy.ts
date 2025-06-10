describe('Skills Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the skills section with title and skills', () => {
    cy.get('.skills').should('be.visible')
    cy.get('.title-section').should('contain', 'My skillset')
    
    // Check web3 skill
    cy.get('.skills__row').eq(0).within(() => {
      cy.get('.skills__name').should('contain', 'web3')
      cy.get('.skills__description').should('contain', 'DeFi')
    })

    // Check JS skill
    cy.get('.skills__row').eq(1).within(() => {
      cy.get('.skills__name').should('contain', 'JS')
      cy.get('.skills__description').should('contain', 'Vue')
    })

    // Check UX skill
    cy.get('.skills__row').eq(2).within(() => {
      cy.get('.skills__name').should('contain', 'UX')
      cy.get('.skills__description').should('contain', 'human perception')
    })
  })
}) 