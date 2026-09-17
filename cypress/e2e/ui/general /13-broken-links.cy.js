describe('Broken Links Check', () => {
    it('TC13 - Should not have any broken links on the page', () => {
        cy.visit('https://labs.hendri.me/');
        cy.get('body').then(($body) => {
            const links = $body.find('a[href]');
            if (links.length === 0) {
                cy.log('No <a href> tags found - navigation likely handled via JS onClick, not real anchor links');
            } else {
                cy.wrap(links).each(($a) => {
                    const href = $a.prop('href');
                    cy.request({ url: href, failOnStatusCode: false }).its('status').should('be.lessThan', 400);
                });
            }
        });
    });
});