describe('Search - No Results', () => {
    it('TC28 - Should show empty product grid when searching non-existent product', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();
        cy.contains('Product Shop').click();

        cy.get('[data-testid="product-search"]').type('aaaa');

        // Grid produk harus kosong, gak ada card sama sekali
        cy.get('.product-grid').find('.product-card').should('have.length', 0);
    });
});