before(() => {
  // root-level hook
  // runs once before all tests
})

beforeEach(() => {
  // root-level hook
  // runs before every test block
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

})

afterEach(() => {
  // runs after each test block
})

after(() => {
  // runs once all tests are done
})


describe('Central de Atendimento ao Cliente TAT', () => {

  /*life cicle*/ 
  before(() => {
    // runs once before all tests in the block
  })

  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
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

  it('verifica o título da aplicação', () => {
    
    cy.visit('./src/index.html')  
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')  

  })
})