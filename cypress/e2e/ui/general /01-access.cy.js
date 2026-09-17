describe('Website Access', () => {
    it('TC01 - Should load the website successfully and return status 200', () => {
        cy.request('https://labs.hendri.me/').its('status').should('eq', 200);
        cy.visit('https://labs.hendri.me/');
        cy.url().should('include', 'labs.hendri.me');
    });
});