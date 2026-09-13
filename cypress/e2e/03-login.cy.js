describe("Login", () => {
    it("POST /login - login user", () => {
        cy.request({
            method: "POST",
            url: "/api/auth/login",
            body: {
                email: "test1789317776029@example.com",
                password: "password123",
            },
        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
        })
    })
})