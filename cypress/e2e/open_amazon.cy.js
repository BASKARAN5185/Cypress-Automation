describe('Amazon website open', () => {
  it(' iphone 16 search', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('.ac-input-container').type("iphone 16");
    cy.get('input[type="submit"]').click(); // Clicks the submit button
    cy.get(".a-icon a-icon-checkbox").check();  

 
  })
  
})

