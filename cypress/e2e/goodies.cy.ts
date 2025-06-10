describe('Goodies Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the goodies section with title and cards', () => {
    cy.get('.goodies').should('be.visible')
    cy.get('.title-section').should('contain', 'Goodies')
    cy.get('.card').should('have.length.at.least', 1)
  })

  it('should display and navigate through goodie cards', () => {
    // Check Git Flow card
    cy.get('.card').contains('Git Flow').parent().within(() => {
      cy.get('img[src="/checklist.webp"]').should('be.visible')
      cy.get('.card__title').should('contain', 'Git Flow')
      cy.get('.card__link').should('have.attr', 'href', '/git-flow')
    })

    // Check Weekly News Feed card
    cy.get('.card').contains('Weekly News Feed').parent().within(() => {
      cy.get('img[src="/news.webp"]').should('be.visible')
      cy.get('.card__title').should('contain', 'Weekly News Feed')
      cy.get('.card__link').should('have.attr', 'href', '/tech-links')
    })

    // Check Karabiner Shortcuts card
    cy.get('.card').contains('Karabiner Shortcuts').parent().within(() => {
      cy.get('img[src="/karabiner.webp"]').should('be.visible')
      cy.get('.card__title').should('contain', 'Karabiner Shortcuts')
      cy.get('.card__link').should('have.attr', 'href', '/karabiner')
    })

    // Check Webdesign checklist card
    cy.get('.card').contains('Webdesign checklist').parent().within(() => {
      cy.get('img[src="/checklist.webp"]').should('be.visible')
      cy.get('.card__title').should('contain', 'Webdesign checklist')
      cy.get('.card__link').should('have.attr', 'href', '/webdesign-checklist')
    })
  })

  it('should navigate to goodie pages', () => {
    // Test Git Flow navigation
    cy.get('.card').contains('Git Flow').parent().find('.card__link').click()
    cy.url().should('include', '/git-flow')
    cy.go('back')

    // Test Weekly News Feed navigation
    cy.get('.card').contains('Weekly News Feed').parent().find('.card__link').click()
    cy.url().should('include', '/tech-links')
    cy.go('back')

    // Test Karabiner Shortcuts navigation
    cy.get('.card').contains('Karabiner Shortcuts').parent().find('.card__link').click()
    cy.url().should('include', '/karabiner')
    cy.go('back')

    // Test Webdesign checklist navigation
    cy.get('.card').contains('Webdesign checklist').parent().find('.card__link').click()
    cy.url().should('include', '/webdesign-checklist')
  })
}) 