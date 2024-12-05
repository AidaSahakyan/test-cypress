describe('Login Tests with Hooks', () => {
    before(() => {
        cy.log('Running setup before all tests'); 
    });

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login'); 
    });

    it('Logs in successfully with valid credentials', () => {
        cy.get('#username').type('tomsmith'); 

        cy.get('#password').type('SuperSecretPassword!');

        cy.get('.radius').click();

        cy.get('.flash.success').should('be.visible')
            .and('contain', 'You logged into a secure area!');
    });

    afterEach(() => {
        cy.log('Cleaning up after each test'); 
    });

    after(() => {
        cy.log('Running cleanup after all tests'); 
    });
});
