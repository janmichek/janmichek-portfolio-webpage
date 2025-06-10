describe('Projects Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the projects section with title and project cards', () => {
    cy.get('.projects').should('be.visible')
    cy.get('.title-section').should('contain', 'Recent projects')

    // Check aeScan.io project
    cy.get('.projects__project').eq(0).within(() => {
      cy.get('.post__heading').should('contain', 'aeScan.io')
      cy.get('img[src="/aescan.webp"]').should('be.visible')
      cy.get('.projects__preview').should('contain', 'Preview')
      cy.get('.project-link').should('have.length.at.least', 1)
    })

    // Check PWN Finance project
    cy.get('.projects__project').eq(1).within(() => {
      cy.get('.post__heading').should('contain', 'PWN Finance')
      cy.get('img[src="/pwn.webp"]').should('be.visible')
      cy.get('.projects__preview').should('have.length', 2)
      cy.get('.project-link').should('have.length.at.least', 1)
    })

    // Check Chatbot Builder project
    cy.get('.projects__project').eq(2).within(() => {
      cy.get('.post__heading').should('contain', 'Chatbot Builder')
      cy.get('img[src="/chatbot.webp"]').should('be.visible')
      cy.get('.projects__preview').should('have.length', 2)
      cy.get('.project-link').should('have.length.at.least', 1)
    })
  })

  it('should navigate to project previews', () => {
    // Test aeScan preview
    cy.get('.projects__preview').first().click()
    cy.url().should('include', '/preview/aescan')
    cy.go('back')

    // Test PWN Finance previews
    cy.get('.projects__preview').eq(1).click()
    cy.url().should('include', '/preview/pwn1')
    cy.go('back')
    cy.get('.projects__preview').eq(2).click()
    cy.url().should('include', '/preview/pwn2')
  })
}) 