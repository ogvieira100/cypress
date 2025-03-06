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

    cy.get('#estado')  
      .as('selectEstado') 
      
      cy.get('#municipios')  
      .as('selectMunicipio') 


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

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

  })
  it('campo email inválido', () => {

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
    cy.get('.error').should('be.visible')

  })
 
   it('carrega municipios de são paulo ', () => {

    // Intercepta a requisição AJAX (substitua 'GET' e a URL correta da API)
    cy.intercept('GET', 'http://localhost:3000/municipios?uf=SP').as('carregarGrid');
    
    cy.get('@selectEstado')
    .select('SP')
    // Aguarda a resposta do AJAX antes de continuar o teste
    cy.wait('@carregarGrid');

    
    cy.get('@selectMunicipio')
    .find('option') 
    .should('have.length', 646) 

   // expect(true).to.eq(true)

  })   

   it('implementação sprint 40', () => {

    expect(true).to.eq(true)

   })


  it('consegue postar o formulario com os campos basicos', () => {

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

    cy.get('@fileUpload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {

        console.log(input)
        expect(input[0].files[0].name).to.eq('example.json')

      })

    cy.get('@fileUpload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {

        console.log(input)
        expect(input[0].files[0].name).to.eq('example.json')

      })
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

  it('carrega municipios de são paulo dados mocados', () => {


    // Intercepta a requisição AJAX (substitua 'GET' e a URL correta da API)
    cy.intercept('GET', 'http://localhost:3000/municipios?uf=SP', {
      statusCode: 200,
      body: [
        { id: 1, "nome-municipio": 'João' },
        { id: 2, "nome-municipio": 'Maria' }
      ]
    }).as('carregarGrid');
    
    cy.get('@selectEstado')
    .select('SP')
    // Aguarda a resposta do AJAX antes de continuar o teste
    cy.wait('@carregarGrid');

    
    cy.get('@selectMunicipio')
    .find('option') 
    .should('have.length', 3) 

   // expect(true).to.eq(true)

  })


})