describe('Form App', ()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=username]');
    const lastNameInput = () => cy.get('input[name=userlast]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button[id="submitB"]');
    const positionSelect = () => cy.get('select[name=position]');
    const termsCBox = () => cy.get('[type=checkbox]');

    it('CHECKING ON MY SANITY', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); 
        expect({}).not.to.equal({}); 
        expect({}).to.eql({});
    })

    it('Checking if proper elements are showing', () => {
        firstNameInput().should('exist')
        lastNameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        submitBtn().should('exist')
        positionSelect().should('exist')
        termsCBox().should('exist')

    })

    it('Checking navigation to site', () => {
        cy.url().should('include', 'localhost');
    })
  
    it('Checking if submit button is disabled', () => {
          submitBtn().should('be.disabled');
    })
      
    describe('Inputing Data', () => {
        
        it('Able to input data in text boxes', () => {
            firstNameInput()
                .should('have.value', '')
                .type('Ahsoka')
                .should('have.value', 'Ahsoka')
    
            lastNameInput()
                .should('have.value', '')
                .type('Tano')
                .should('have.value', 'Tano')
            
            emailInput()
                .should('have.value', '')
                .type('Dualwielder101@jeditemple.com')
                .should('have.value', 'Dualwielder101@jeditemple.com')
            
            passwordInput()
                .should('have.value', '')
                .type('atano101')
                .should('have.value', 'atano101')
            
            positionSelect()
                .should('have.value', '')
                .select(['Student'])
                .should('have.value', 'Student')

            termsCBox()
                .check()
                .should('be.checked')
               
        })
    })

    describe('Checking if submit button is functional after data is inputed', () => {
        it('Submitting information and clicking', () => {
            firstNameInput()
                .should('have.value', '')
                .type('Ahsoka')
                .should('have.value', 'Ahsoka')
    
            lastNameInput()
                .should('have.value', '')
                .type('Tano')
                .should('have.value', 'Tano')
            
            emailInput()
                .should('have.value', '')
                .type('Dualwielder101@jeditemple.com')
                .should('have.value', 'Dualwielder101@jeditemple.com')
            
            passwordInput()
                .should('have.value', '')
                .type('atano101')
                .should('have.value', 'atano101')
            
            positionSelect()
                .should('have.value', '')
                .select(['Student'])
                .should('have.value', 'Student')

            termsCBox()
                .check()
                .should('be.checked')
       
            submitBtn()
                .click()
            }) 
    }) 
    describe('Checking error validation if data is inputed incorrectly', () => {
        it('Validating errors', () => {
            firstNameInput()
                .should('have.value', '')
                .type('Ahsoka')
                .should('have.value', 'Ahsoka')
        
            lastNameInput()
                .should('have.value', '')
                .type('Tano')
                .should('have.value', 'Tano')
                
            emailInput()
                .should('have.value', '')
                .type('Dualwielder101@jeditemple.com')
                .should('have.value', 'Dualwielder101@jeditemple.com')
                
            passwordInput()
                .should('have.value', '')
                .type('atano101')
                .should('have.value', 'atano101')
                
            positionSelect()
                .should('have.value', '')
                .select(['Student'])
                .should('have.value', 'Student')
    
            termsCBox()
                .check()
                .should('be.checked')
           
            lastNameInput()
                .should('have.value', 'Tano')
                .clear()
                .should('have.value', '')
                
            emailInput()
                .should('have.value', 'Dualwielder101@jeditemple.com')
                .clear()
                .should('have.value', '')

            firstNameInput()
                .should('have.value', 'Ahsoka')
                .clear()
                .should('have.value', '')

            passwordInput()
                .should('have.value', 'atano101')
                .clear()
                .should('have.value', '')

            termsCBox()
                .uncheck()
                    

            cy.contains('First name is required!').should('exist')
            cy.contains('Last name is required!').should('exist')
            cy.contains('Minimum of 6 characters are required for your password!').should('exist')
            cy.contains('Must Agree to Terms of Service by checking the box!').should('exist')
            cy.contains('Valid email address is required!').should('exist')
            })  
        })
    


})