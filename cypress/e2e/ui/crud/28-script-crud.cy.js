describe('Script CRUD', () => {
    it('TC39 - Should read, create, update, and delete a script lab', () => {
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();
        cy.contains('Script CRUD').click();

        // READ
        cy.get('.scripts-grid').find('.script-card').should('have.length.greaterThan', 0);

        // CREATE
        const scriptTitle = `Test Script ${Date.now()}`;
        cy.get('#title').type(scriptTitle);
        cy.get('textarea').type('Automated test script description');
        cy.contains('button', 'Add Script').click();
        cy.contains(scriptTitle).should('be.visible');

        // UPDATE
        const updatedTitle = `${scriptTitle} - Updated`;
        cy.contains('.script-card', scriptTitle).within(() => {
            cy.contains('button', 'Edit').click();
        });
        cy.get('.script-card.editing').within(() => {
            cy.get('input').first().clear().type(updatedTitle);
            cy.contains('button', 'Save').click();
        });
        cy.contains(updatedTitle).should('be.visible');

        // DELETE
        cy.contains('.script-card', updatedTitle).within(() => {
            cy.contains('button', 'Delete').click();
        });
        // Konfirmasi delete di modal - cari via tombol Cancel yang unik, ambil sibling-nya
        cy.contains('button', 'Cancel')
            .siblings('button')
            .contains('Delete')
            .click();

        cy.contains(updatedTitle).should('not.exist');
    });
});