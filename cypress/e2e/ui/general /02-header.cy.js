describe('Header Elements', () => {
    it('TC02 - Should display main header and key branding elements', () => {
        cy.visit('https://labs.hendri.me/');
        cy.get('header, nav, h1').should('be.visible');
    });
});