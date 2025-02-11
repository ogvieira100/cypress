
### primeiro passo instalar o cypress
    npm install cypress@13.12.0 --save-dev
### segundo passo 
    npx cypress open rodar o comando no diretório 

### adicione ao package.json 

```json 
  "scripts": {
    "cy:open": "cypress open",
    "test": "cypress run"    
  },

```

### commands
 - npm run cy:open



### Life circle 
```cypress

 before(() => {
  // root-level hook
  // runs once before all tests
})

beforeEach(() => {
  // root-level hook
  // runs before every test block
})

afterEach(() => {
  // runs after each test block
})

after(() => {
  // runs once all tests are done
})

describe('Hooks', () => {
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
})
``` 

#### Extensões válidas 

 - cypress Helper (latest)

 ### Dica :. 

  - executa somente esse teste

  ```javascript
  
  it.only('preenche o formulario e envia', () => {    }) 

  ```