describe("Register", () => {
    it("POST /register - register user baru", () => {
        cy.request({
            method: "POST",
            url: "/api/auth/register",
            body: {
                email: `test${Date.now()}@example.com`,
                password: "password123",
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.be.oneOf([200, 201]);
        });
    })
})