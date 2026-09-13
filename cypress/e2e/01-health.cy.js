describe("Health Check", () => {
    it("GET /health - server harus hidup", () => {
        cy.request("GET", "/health").then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});