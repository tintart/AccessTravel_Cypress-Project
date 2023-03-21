
///<reference types = "Cypress"/>
describe('Navigate to main page in Access Travel site and check all options', () => {
    
    const hotels = '.hotels'
    const guides = '.guides'
    const tours = '.js-list-tours'
    const become_guide = '.become-guide'
    const to_do = '.attraction-link'
    const login = 'div.nav-access > [href="/en-US/Account/Login"]'
    const signup = 'div.nav-access > [href="/en-US/Account/Register"]'
  
    before(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    })
    beforeEach(() => {
     cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    })


    it('Check HOTELS button ', () => {
      cy.get(hotels).should("be.visible")
      cy.get(hotels).click()
      cy.get('.hotels-wrap').should("be.visible")
    })

    it('Check GUIDES button ', () => {
      cy.get(guides).should("be.visible")
      cy.get(guides).click()
      cy.get(become_guide).should("be.visible")
    })

    it('Check TOURS button ', () => {
      cy.get(tours).should("be.visible")
      cy.get(tours).click()
      cy.get(become_guide).should("be.visible")
    })

    it('Check THINGS TO DO button ', () => {
      cy.get(to_do).should("be.visible")
      cy.get(to_do).click()
      cy.get('.attractions-search__head').should("be.visible")
    })

    it('Check Login button ', () => {
      cy.get(login).should("be.visible")
      cy.get(login).click()
      cy.get('.login').should("be.visible")
    })

    it('Check Signup button ', () => {
      cy.get(signup).should("be.visible")
      cy.get(signup).click()
      cy.get('.registration').should("be.visible")
    })


  })