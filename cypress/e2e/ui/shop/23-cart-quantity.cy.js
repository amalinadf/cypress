describe('Cart Quantity Controls', () => {
    beforeEach(() => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();
        cy.contains('Product Shop').click();
        cy.contains('Selenium Login Test Pack')
            .parents('.product-card')
            .find('button.btn.primary')
            .click();
    });

    it('TC25 - Should increase quantity and update total when clicking +', () => {
        cy.get('[data-testid="qty-selenium-login-pack"]').should('contain', '1');
        cy.get('button[aria-label="Increase Selenium Login Test Pack"]').click();
        cy.get('[data-testid="qty-selenium-login-pack"]').should('contain', '2');
        cy.contains(/Rp\s*98\.000/).should('be.visible');
    });

    it('TC26 - Should NOT decrease quantity below 1', () => {
        cy.get('[data-testid="qty-selenium-login-pack"]').should('contain', '1');
        cy.get('button[aria-label="Decrease Selenium Login Test Pack"]').click();
        cy.get('[data-testid="qty-selenium-login-pack"]').should('contain', '1');
    });

    it('TC27 - Should remove item from cart when clicking Remove', () => {
        cy.contains('Remove').click();
        cy.get('[data-testid="cart-panel"]').should('contain', 'Your cart is empty');
    });
});