describe('Navigation - Auth Card', () => {
    it('TC11 - Should navigate to Auth section when Auth card is clicked', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.contains('Welcome to Script Labs').should('be.visible');
        cy.contains('Login or Register').should('be.visible');
    });
});