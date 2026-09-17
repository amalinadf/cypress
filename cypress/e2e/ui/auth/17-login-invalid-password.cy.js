describe('Login Flow - Invalid Password', () => {
    it('TC18 - Should show error with wrong password', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('wrongpassword123');
        cy.get('.auth-submit-btn').click();
        cy.contains(/invalid|incorrect|salah|failed/i).should('be.visible');
    });
});
