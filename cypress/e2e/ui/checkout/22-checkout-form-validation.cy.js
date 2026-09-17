describe('Checkout Flow', () => {
    it('TC23 - Should validate checkout flow from empty cart to successful checkout', () => {
        // Login sekali di awal
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();
        cy.contains('Product Shop').click();

        // Cek dulu: cart kosong -> tombol checkout harus disabled
        cy.get('[data-testid="cart-panel"]').should('contain', 'Your cart is empty');
        cy.get('[data-testid="checkout-submit"]').should('be.disabled');

        // Tambahin produk ke cart
        cy.get('[data-testid="add-playwright-api-ui-bundle"]').click();

        // Submit form kosong (nama & email belum diisi) -> harus gagal
        cy.get('[data-testid="checkout-submit"]').click();
        cy.get('[data-testid="checkout-name"]:invalid').should('exist');

        // Isi form dengan data valid -> submit -> harus sukses
        cy.get('[data-testid="checkout-name"]').type('Amalina Dwi Firzanah');
        cy.get('[data-testid="checkout-email"]').type('amalina@example.com');
        cy.get('[data-testid="checkout-submit"]').click();

        cy.get('[data-testid="checkout-success"]')
            .should('be.visible')
            .and('contain', 'Checkout successful');
    });
});