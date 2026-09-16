describe("Register", () => {
    it("POST /register - register user baru", () => {
        const email = `test${Date.now()}@example.com`;
        cy.request({
            method: "POST",
            url: "/api/auth/register",
            body: { email: email, password: "password123" },
            failOnStatusCode: false,
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.be.oneOf([200, 201]);
            cy.writeFile("cypress/fixtures/test-data.json", { email: email });
        });
    });
});