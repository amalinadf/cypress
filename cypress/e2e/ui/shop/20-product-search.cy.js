describe('Product Search', () => {
    it('TC21 - Should filter products when searching "API"', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();

        cy.contains('Product Shop').click();
        cy.get('[data-testid="product-search"]').type('API');

        cy.contains('Playwright API + UI Bundle').should('be.visible');
        cy.contains('Postman API Collection').should('be.visible');
    });
});