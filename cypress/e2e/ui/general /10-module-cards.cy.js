describe('Module Cards', () => {
    it('TC10 - Should display Auth, CRUD, and E2E module cards', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').should('be.visible');
        cy.contains('CRUD').should('be.visible');
        cy.contains('E2E').should('be.visible');
    });
});