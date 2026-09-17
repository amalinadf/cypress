describe('Login - Locked User', () => {
    it('TC41 - Should fail login for locked user account', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('locked_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();

        cy.contains('User account is locked').should('be.visible');
    });
});