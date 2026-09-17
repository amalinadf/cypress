describe('Login Flow - Valid Credentials', () => {
    it('TC16 - Should login successfully with standard user credentials', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();
        cy.contains(/welcome|dashboard|logout/i).should('be.visible');
    });

    it('TC17 - Should login successfully with admin credentials', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('admin@example.com');
        cy.get('#password').type('admin123');
        cy.get('.auth-submit-btn').click();
        cy.contains(/welcome|dashboard|logout/i).should('be.visible');
    });
});