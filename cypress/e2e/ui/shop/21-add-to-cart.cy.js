describe('Add to Cart', () => {
    it('TC22 - Should add product to cart and update cart total', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();

        cy.contains('Product Shop').click();

        cy.get('[data-testid="cart-panel"]').should('contain', 'Your cart is empty');

        // Ambil harga produk dari card-nya dulu, simpen ke variable
        cy.get('[data-testid="add-playwright-api-ui-bundle"]')
            .closest('.product-card')
            .find('.product-price')
            .invoke('text')
            .then((productPrice) => {
                cy.get('[data-testid="add-playwright-api-ui-bundle"]').click();

                // Cart total harus sama persis dengan harga produk yang di-add
                cy.get('[data-testid="cart-panel"]').should('contain', productPrice.trim());
            });
    });
});