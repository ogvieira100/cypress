// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillForm', (data) => {    
    cy.get('@txtNome').type(data.firstName)
    cy.get('@txtLastName').type(data.lastName)
    cy.get('@txtEmail').type(data.email)
    cy.get('@txtPhone').type(data.phone)
    cy.get('@selectProduct').select(data.product)
    cy.get('@txtTextArea').type(data.textArea)
    cy.get('@radioAtendimento').check(data.radioAtendimento)
    if(data.checkboxEmail){
        cy.get('@checkboxEmail').check()
    }
    if(data.checkboxPhone){
        cy.get('@checkboxPhone').check()
    }
    if(data.fileUpload){
        cy.get('@fileUpload').attachFile(data.fileUpload)
    }
})   