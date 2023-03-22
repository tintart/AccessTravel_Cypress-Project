///<reference types = "Cypress"/>
describe('Navigate to HOTELS menu and check all options', () => {
    
    const hotels = '.hotels';
    const search = '[type="submit"]';
    const destinations = '[name="Filter.DestinationId"]';
    const adults = '[name="Filter.AdultNum"]';
    const childrens = '[name="Filter.ChildrenNum"]';
    const checkin = '[name="Filter.CheckIn"]';
    const checkout = '[name="Filter.CheckOut"]';
 
    
    before(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    })
    beforeEach(() => {
      cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
      cy.get('button.button').click()
  
    })

  

      it('Check drop down list Destinations to Jerusalem ', () => {
        cy.get(destinations).should("be.visible")
        cy.get(destinations).select('Jerusalem')
        cy.get(search).click()
      })

      it('Check drop down list Destinations to London ', () => {
        cy.get(destinations).should("be.visible")
        cy.get(destinations).select('London')
        cy.get(search).click()
      })

      it('Check drop down list Destinations to New York ', () => {
        cy.get(destinations).should("be.visible")
        cy.get(destinations).select('New York')
        cy.get(search).click()
      })
        
      it('Check Children options ', () => {
      cy.get(destinations).select('New York')  
      cy.get(childrens).should("be.visible")
      cy.get(childrens).clear()
      cy.get(childrens).type('4')
      cy.get(search).click()
      })

      it('Check Children options - negative test ', () => {
        cy.get(destinations).select('New York')  
        cy.get(childrens).should("be.visible")
        cy.get(childrens).clear()
        cy.get(childrens).type('1114')
        cy.get(search).click()
        })

        it('Check Adults options ', () => {
          cy.get(destinations).select('New York')  
          cy.get(adults).should("be.visible")
          cy.get(adults).clear()
          cy.get(adults).type('4')
          cy.get(search).click()
        })

        it('Check Adults options - negative test ', () => {
          cy.get(destinations).select('New York')  
          cy.get(adults).should("be.visible")
          cy.get(adults).clear()
          cy.get(adults).type('114')
          cy.get(search).click()
        })

        it('Check Check In options', () => {
          cy.get(destinations).select('New York')  
          cy.get(checkin).should("be.visible")
          cy.get(checkin).clear()
          cy.get(checkin).type('2023-12-04')
        })

        it('Check Check In options - negative test ', () => {
          cy.get(destinations).select('New York') 
          cy.get(checkin).should("be.visible")
          cy.get(checkin).clear()
          cy.get(checkin).type('2022-31-03')
        })

        it('Check Check Out options', () => {
          cy.get(destinations).select('New York')  
          cy.get(checkout).should("be.visible")
          cy.get(checkout).clear()
          cy.get(checkout).type('2023-12-04')
        })

        it('Check Check Out options - negative test ', () => {
          cy.get(destinations).select('New York') 
          cy.get(checkout).should("be.visible")
          cy.get(checkout).clear()
          cy.get(checkout).type('2022-31-03')
        })
      
  
})
