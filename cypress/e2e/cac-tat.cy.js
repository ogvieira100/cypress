before(() => {
  // root-level hook
  // runs once before all tests
})



afterEach(() => {
  // runs after each test block
})

after(() => {
  // runs once all tests are done
})


describe('Central de Atendimento ao Cliente TAT', () => {

  /*life cicle*/ 


  beforeEach(() => {
    cy.visit('./src/index.html') 

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
   
    cy.get('input[type="radio"][name="atendimento-tat"][value="feedback"]')   
      .as('radioFeedback') 
    cy.get('input[type="radio"][name="atendimento-tat"][value="elogio"]')   
      .as('radioElogio') 
      cy.get('input[type="radio"][name="atendimento-tat"][value="ajuda"]')   
      .as('radioAjuda') 


    cy.get('#email-checkbox')   
      .as('checkboxEmail')  
    cy.get('#phone-checkbox')   
      .as('checkboxPhone')     
      
      
    cy.get('#file-upload')
      .as('fileUpload')     
    cy.get('button[type="submit"]') 
      .as('btnSubmit')    
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
  })


  it.skip('verifica o título da aplicação', () => {
    
    cy.visit('./src/index.html')  
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')  

  })
  it('campo email inválido',()=>{

       /*preenche os campos obrigatórios*/
    cy.get('@txtNome')
    .type('Osmar')
    .should('have.value', 'Osmar')  
  
    cy.get('@txtLastName')
    .type('Junior')
    .should('have.value', 'Junior') 

    cy.get('@txtEmail')
      .type('osmargv100@gmail,com')
      .should('have.value', 'osmargv100@gmail,com')

    cy.get('@txtTextArea')
    .type('Teste de preenchimento de formulario')
    .should('have.value', 'Teste de preenchimento de formulario')

    cy.get('@btnSubmit').click()  
    cy.get('.error') .should('be.visible') 

  })


  it('consegue postar o formulario com os campos basicos',()=>{

    /*preenche os campos obrigatórios*/
    cy.get('@txtNome')
    .type('Osmar')
    .should('have.value', 'Osmar')  
  
    cy.get('@txtLastName')
    .type('Junior')
    .should('have.value', 'Junior') 

    cy.get('@txtEmail')
      .type('osmargv100@gmail.com')
      .should('have.value', 'osmargv100@gmail.com')

    cy.get('@txtTextArea')
    .type('Teste de preenchimento de formulario')
    .should('have.value', 'Teste de preenchimento de formulario')

    cy.get('@selectProduct')
      .select('Blog')
      .should('have.value', 'blog') 
     
    cy.get('@radioFeedback')
      .check()
      .should('be.checked') 
      
      cy.get('@radioElogio')
      .check()
      .should('be.checked') 

      cy.get('@radioAjuda')
      .check()
      .should('be.checked') 

      cy.get('@checkboxEmail')  
      .check()
      .should('be.checked') 
      .last()
      .uncheck()  
      .should('not.be.checked') 


 /*     

      cy.get('@checkboxPhone')  
      .check()
      .should('be.checked')  */

    cy.get('@btnSubmit').click()  
    cy.get('span.success').should('be.visible') 


  })

  it('preenche o formulario e envia validação de campos Obrigatórios apenas com o campo nome preenchido', () => {
 
    /*valida se o preenchimento de bom*/ 
    cy.get('@txtNome')
    .type('Osmar')
    .should('have.value', 'Osmar')  

    /*clica no botão de submit*/
    cy.get('@btnSubmit').click()
    .get('span.error')
    .should('be.visible')     



  })

  it('preenche o nome com Osmar', () => {  
    /*
      sempre dar um alias é uma boa prática para reutilizar o elemento  
    */ 
    cy.get('@txtNome').clear().type('Osmar')  
    cy.get('@txtNome').should('have.value', 'Osmar')  
  
  })


})