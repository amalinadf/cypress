describe("Create Lab", () => {
    it("POST /api/labs - create lab", () => {
        cy.readFile("cypress/fixtures/test-data.json").then((data) => {
            cy.request({
                method: "POST",
                url: "/api/labs",
                headers: { Authorization: `Bearer ${data.token}`, "Content-Type": "application/json" },
                body: {
                    title: `Cypress Checkout Test ${Date.now()}`,
                    description: "Automation script for add-to-cart and checkout flow",
                },
            }).then((res) => {
                cy.log(JSON.stringify(res.body));
                expect(res.status).to.be.oneOf([200, 201]);
                const labId = res.body.data?.id ?? res.body.id;
                cy.writeFile("cypress/fixtures/test-data.json", { ...data, labId: labId });
            });
        });
    });
});