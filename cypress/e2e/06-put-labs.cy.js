describe("Update Labs", () => {
    it("PUT /api/labs/:id - update lab", () => {
        cy.readFile("cypress/fixtures/test-data.json").then((data) => {
            cy.request({
                method: "PUT",
                url: `/api/labs/${data.labId}`,
                headers: { Authorization: `Bearer ${data.token}` },
                body: { title: "Updated Lab Title", description: "Updated description for the lab" },
            }).then((res) => {
                cy.log(JSON.stringify(res.body));
                expect(res.status).to.eq(200);
            });
        });
    });
});