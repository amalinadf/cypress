describe('Start Testing Button', () => {
    it('TC08 - Should display and allow clicking "Start Testing" button', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('button, a', 'Start Testing').should('be.visible').click();
    });
});