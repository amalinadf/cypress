describe('Login Flow - Unregistered Email', () => {
    it('TC20 - Should show error for non-existent email', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type(`notregistered${Date.now()}@example.com`);
        cy.get('#password').type('somepassword');
        cy.get('.auth-submit-btn').click();
        cy.contains(/invalid|not found|incorrect|failed/i).should('be.visible');
    });
});