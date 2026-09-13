describe("Create Lab", () => {
    it("POST /api/labs - create lab", () => {
        cy.request({
            method: "POST",
            url: "/api/labs",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNDMwMzA3Mi1iOWFlLTQ4MjQtOTc5Ni03Yzg3MGUxMmE4ZmYiLCJlbWFpbCI6InRlc3QxNzg5MzE3Nzc2MDI5QGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOiJhY3RpdmUiLCJpYXQiOjE3ODkzMTgwNzAsImV4cCI6MTc4OTQwNDQ3MH0.qOK84HsdVcMbMOXm0QCr7CRhgwSc6ncEiXwkNSuqUCs",
                "Content-Type": "application/json",
            },
            body: {
                title: `Cypress Checkout Test ${Date.now()}`,
                description: "Automation script for add-to-cart and checkout flow",
            },
        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.be.oneOf([200, 201]);
        });
    });
});