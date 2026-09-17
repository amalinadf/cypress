describe('Image Assets', () => {
    it('TC06 - Should load all images successfully without broken links', () => {
        cy.visit('https://labs.hendri.me/');
        cy.get('body').then(($body) => {
            const images = $body.find('img');
            if (images.length === 0) {
                cy.log('No <img> elements found - page likely uses SVG/icon components instead');
            } else {
                cy.wrap(images).each(($img) => {
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                });
            }
        });
    });
});