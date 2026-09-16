describe("Get Labs", () => {
    it("GET /api/labs - get all labs", () => {
        cy.readFile("cypress/fixtures/test-data.json").then((data) => {
            cy.request({
                method: "GET",
                url: "/api/labs",
                headers: { Authorization: `Bearer ${data.token}` },
            }).then((res) => {
                cy.log(JSON.stringify(res.body));
                expect(res.status).to.be.oneOf([200, 201]);
            });
        });
    });
});