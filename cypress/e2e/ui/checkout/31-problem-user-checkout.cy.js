describe('Checkout - Problem User', () => {
    it('TC42 - Should login successfully but fail checkout intentionally', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('problem_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();

        // Login harus sukses
        cy.get('#welcome-user').should('contain', 'problem_user@example.com');

        cy.contains('Product Shop').click();
        cy.get('[data-testid="add-playwright-api-ui-bundle"]').click();

        // Banner peringatan udah muncul dari awal sebelum submit
        cy.get('[data-testid="problem-user-banner"]')
            .should('be.visible')
            .and('contain', 'checkout is intentionally blocked');

        cy.get('[data-testid="checkout-name"]').type('Problem User');
        cy.get('[data-testid="checkout-email"]').type('problem_user@example.com');
        cy.get('[data-testid="checkout-submit"]').click();

        // Checkout harus gagal dengan pesan error spesifik
        cy.get('[data-testid="checkout-error"]')
            .should('be.visible')
            .and('contain', 'Checkout failed for problem_user');
    });
});