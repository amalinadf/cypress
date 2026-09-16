describe("Login", () => {
    it("POST /login - login user", () => {
        cy.readFile("cypress/fixtures/test-data.json").then((data) => {
            cy.request({
                method: "POST",
                url: "/api/auth/login",
                body: { email: data.email, password: "password123" },
            }).then((res) => {
                cy.log(JSON.stringify(res.body));
                expect(res.status).to.eq(200);
                cy.writeFile("cypress/fixtures/test-data.json", { ...data, token: res.body.data.token });
            });
        });
    });
});