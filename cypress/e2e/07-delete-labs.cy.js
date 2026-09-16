describe("Delete Labs", () => {
    it("DELETE /api/labs/:id - delete lab", () => {
        cy.readFile("cypress/fixtures/test-data.json").then((data) => {
            cy.request({
                method: "DELETE",
                url: `/api/labs/${data.labId}`,
                headers: { Authorization: `Bearer ${data.token}` },
            }).then((res) => {
                cy.log(JSON.stringify(res.body));
                expect(res.status).to.be.oneOf([200, 204]);
            });
        });
    });
});