describe('Footer Elements', () => {
    it('TC03 - Should display footer or bottom page information', () => {
        cy.visit('https://labs.hendri.me/');
        cy.scrollTo('bottom');
        cy.get('footer').should('exist');
    });
});