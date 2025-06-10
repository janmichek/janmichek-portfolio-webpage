describe('Individual Pages', () => {
  it('should display the webdesign checklist page with checklist component', () => {
    cy.visit('/webdesign-checklist')
    cy.get('.checklist__checkbox').should('exist')
    cy.get('.checklist__label').should('exist')
  })

  it('should display the gallery page with swiper component', () => {
    cy.visit('/gallery')
    cy.get('.swiper').should('be.visible')
    cy.get('.swiper__image').should('exist')
    cy.get('.swiper-button-prev').should('exist')
    cy.get('.swiper-button-next').should('exist')
  })

  it('should display the karabiner page with title slug component', () => {
    cy.visit('/karabiner')
    cy.get('.title-slug').should('be.visible')
    cy.get('.title-slug__title').should('exist')
    cy.get('.title-slug__description').should('exist')
  })

  it('should display the tech-links page', () => {
    cy.visit('/tech-links')
    cy.get('article').should('be.visible')
  })

  it('should display the git-flow page', () => {
    cy.visit('/git-flow')
    cy.get('article').should('be.visible')
  })

  it('should display project preview pages', () => {
    // Test aeScan preview
    cy.visit('/preview/aescan')
    cy.get('.preview').should('be.visible')
    cy.get('img[src="/screencaptures/preview-aescan.gif"]').should('exist')

    // Test PWN Finance previews
    cy.visit('/preview/pwn1')
    cy.get('.preview').should('be.visible')
    cy.get('img[src="/screencaptures/preview-pwn1.gif"]').should('exist')
    
    cy.visit('/preview/pwn2')
    cy.get('.preview').should('be.visible')
    cy.get('img[src="/screencaptures/preview-pwn2.gif"]').should('exist')

    // Test Chatbot Builder previews
    cy.visit('/preview/chatbot1')
    cy.get('.preview').should('be.visible')
    cy.get('img[src="/screencaptures/preview-chatbot1.gif"]').should('exist')
    
    cy.visit('/preview/chatbot2')
    cy.get('.preview').should('be.visible')
    cy.get('img[src="/screencaptures/preview-chatbot2.gif"]').should('exist')
  })
}) 