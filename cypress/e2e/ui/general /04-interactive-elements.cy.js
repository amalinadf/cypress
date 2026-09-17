describe('Interactive Elements', () => {
    it('TC04 - Should allow user to click interactive elements or navigation links', () => {
        cy.visit('https://labs.hendri.me/');
        cy.get('a, button').first().should('be.visible').click();
    });
});