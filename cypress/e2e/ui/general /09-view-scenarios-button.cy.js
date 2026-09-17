describe('View Scenarios Button', () => {
    it('TC09 - Should display and allow clicking "View Scenarios" button', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('button, a', 'View Scenarios').should('be.visible').click();
    });
});