describe('Category Filter', () => {
    it('TC31 - Should filter products correctly for each category', () => {
        // Login sekali di awal
        cy.visit('https://labs.hendri.me/');
        cy.contains('Auth').click();
        cy.get('#email').type('standard_user@example.com');
        cy.get('#password').type('script_sauce');
        cy.get('.auth-submit-btn').click();
        cy.contains('Product Shop').click();

        // Test 1: UI Automation
        cy.get('[data-testid="category-filter"]').select('UI Automation');
        cy.contains('Selenium Login Test Pack').should('be.visible');
        cy.contains('Postman API Collection').should('not.exist');

        // Test 2: E2E Testing
        cy.get('[data-testid="category-filter"]').select('E2E Testing');
        cy.contains('Cypress Checkout Suite').should('be.visible');
        cy.contains('Postman API Collection').should('not.exist');

        // Test 3: Full Flow Testing
        cy.get('[data-testid="category-filter"]').select('Full Flow Testing');
        cy.contains('Playwright API + UI Bundle').should('be.visible');
        cy.contains('Postman API Collection').should('not.exist');

        // Test 4: API Testing
        cy.get('[data-testid="category-filter"]').select('API Testing');
        cy.contains('Postman API Collection').should('be.visible');
        cy.contains('Selenium Login Test Pack').should('not.exist');

        // Test 5: Manual Testing
        cy.get('[data-testid="category-filter"]').select('Manual Testing');
        cy.contains('QA Test Case Template').should('be.visible');
        cy.contains('Selenium Login Test Pack').should('not.exist');

        // Test 6: Test Strategy
        cy.get('[data-testid="category-filter"]').select('Test Strategy');
        cy.contains('Regression & Smoke Pack').should('be.visible');
        cy.contains('Selenium Login Test Pack').should('not.exist');

        // Test 7: All (balik nampilin semua produk)
        cy.get('[data-testid="category-filter"]').select('All');
        cy.get('.product-grid').find('.product-card').should('have.length', 6);
    });
});