describe('Responsive - Tablet', () => {
    it('TC15 - Should render correctly on tablet viewport', () => {
        cy.viewport('ipad-2');
        cy.visit('https://labs.hendri.me/');
        cy.get('body').should('be.visible');
    });
});