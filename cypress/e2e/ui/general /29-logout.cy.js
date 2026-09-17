describe('Logout Flow', () => {
    it('TC40 - Should logout successfully and return to landing page', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();

        // Pastikan udah login
        cy.get('#welcome-user').should('contain', 'standard_user@example.com');

        // Klik Logout
        cy.contains('button', 'Logout').click();

        // Pastikan balik ke state belum login
        cy.get('#welcome-user').should('not.exist');
        cy.contains('Auth').should('be.visible');
    });
});