


function getFieldsCac(){

 /*captura os campos e dá um alias*/
 cy.get('#firstName').clear()
 .as('txtNome')  
cy.get('#lastName')
 .as('txtLastName') 
cy.get('#email')
 .as('txtEmail')
cy.get('#phone') 
 .as('txtPhone')
cy.get('#product')  
 .as('selectProduct')
cy.get('#open-text-area')
 .as('txtTextArea') 
cy.get('input[type="radio"][name="atendimento-tat"]')  
 .as('radioAtendimento') 
cy.get('#email-checkbox')   
 .as('checkboxEmail')  
cy.get('#phone-checkbox')   
 .as('checkboxPhone')      
cy.get('#file-upload')
 .as('fileUpload')     
cy.get('button[type="submit"]') 
 .as('btnSubmit')    


}

describe('Tela de login error', () => { 

    beforeEach(() => {  
        cy.visit('./src/login.html') 
        cy.get('#login-txt')
          .as('login')
        cy.get('#password-txt')
            .as('password')  
        cy.get('button[type="submit"]') 
            .as('btnSubmit')    
    })

    it('Deve informar que o login e senha são inválidos', () => {  
        cy.get('@login').type('admin')
        cy.get('@password').type('123')
        cy.get('@btnSubmit').click()
        cy.get('.password-invalid').should('be.visible')
    })  
    it('Deve informar que o login e senha são obrigatórios', () => {  
        cy.get('@btnSubmit').click()
        cy.get('.login-error').should('be.visible')
    })  

})

describe('Tela de login', () => {  

    beforeEach(() => {  
        cy.visit('./src/login.html') 
        cy.get('#login-txt')
          .as('login')
        cy.get('#password-txt')
            .as('password')  
        cy.get('button[type="submit"]') 
            .as('btnSubmit')    
    })

    it('Deve informar que o login e senha são inválidos', () => {  
        cy.get('@login').type('admin')
        cy.get('@password').type('123')
        cy.get('@btnSubmit').click()
        cy.get('.password-invalid').should('be.visible')
    })  
    it('Deve informar que o login e senha são obrigatórios', () => {  
        cy.get('@btnSubmit').click()
        cy.get('.login-error').should('be.visible')
    })  
    it('Deve redirecionar para a página index.html', () => {  
        cy.get('@login').type('admin')
        cy.get('@password').type('admin')
        cy.get('@btnSubmit').click()
        cy.url().should('include', 'index.html')  

        getFieldsCac()

         /*valida se o preenchimento de bom*/ 
        cy.get('@txtNome')
        .type('Osmar')
        .should('have.value', 'Osmar')  

        /*clica no botão de submit*/
        cy.get('@btnSubmit').click()
        .get('span.error')
        .should('be.visible')     

    })  

}) 