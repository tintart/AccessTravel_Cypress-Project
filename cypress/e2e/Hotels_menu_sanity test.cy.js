///<reference types = "Cypress"/>
describe('Navigate to HOTELS menu and check all options', () => {
    
    const hotels = '.hotels';
 
    
    before(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    })
    beforeEach(() => {
      cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
      cy.get('button.button').click()
  
    })

  

      it('Check drop down list Destinations ', () => {
        cy.get('#Filter_DestinationId').should("be.visible")
        cy.get('#Filter_DestinationId').select('Jerusalem')
        cy.get('#Filter_DestinationId').select('London')
        cy.get('#Filter_DestinationId').select('New York')
      })

      it('Check Children options ', () => {
      cy.get('#Filter_ChildrenNum').should("be.visible")
      cy.get('#Filter_ChildrenNum').type('4')
      cy.get('#Filter_ChildrenNum').clear()
      cy.get('#Filter_ChildrenNum').type('14')
      
      })

      it('Do negative tests for adults, children and dates options ', () => {
      cy.get('#Filter_AdultNum').should("be.visible")
      cy.get('#Filter_AdultNum').clear()
      cy.get('#Filter_AdultNum').type('-5')
      cy.get('#Filter_AdultNum').clear()
      cy.get('#Filter_ChildrenNum').clear()
      cy.get('#Filter_ChildrenNum').type('-1004')
      cy.get('#dp1678477092262').should("be.visible")
      cy.get('#dp1678477092262').type('2023-30-03')
      cy.get('#dp1679324924343').should("be.visible")
      cy.get('#dp1679324924343').type('2024-31-03')
      })

})
