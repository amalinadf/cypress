describe('Hero Section Content', () => {
    it('TC07 - Should display correct hero title and eyebrow text', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('QA Automation Playground').should('be.visible');
        cy.contains('Practice real testing flows in one').should('be.visible');
    });
});