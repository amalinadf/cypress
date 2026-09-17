describe('Login Flow - Empty Fields Validation', () => {
    it('TC19 - Should show required validation when submitting empty form', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('.auth-submit-btn').click();
        cy.get('#email:invalid').should('exist'); // karena input punya atribut "required"
    });
});