describe('Testing Approach Sections', () => {
    it('TC12 - Should display the three testing approach sections', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Manual Testing').should('be.visible');
        cy.contains('Automation Testing').should('be.visible');
        cy.contains('API + Database Flow').should('be.visible');
    });
});