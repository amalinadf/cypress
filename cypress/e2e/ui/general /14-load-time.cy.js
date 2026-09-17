describe('Page Load Performance', () => {
    it('TC14 - Should load the page within acceptable time', () => {
        const start = Date.now();
        cy.visit('https://labs.hendri.me/').then(() => {
            const loadTime = Date.now() - start;
            expect(loadTime).to.be.lessThan(5000);
        });
    });
});