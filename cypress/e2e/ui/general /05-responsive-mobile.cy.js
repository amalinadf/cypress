describe('Responsive - Mobile', () => {
    it('TC05 - Should render correctly on mobile viewport', () => {
        cy.viewport('iphone-xr');
        cy.visit('https://labs.hendri.me/');
        cy.get('body').should('be.visible');
    });
});