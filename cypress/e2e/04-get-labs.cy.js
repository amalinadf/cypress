describe("Get Labs", () => {
    it("GET /api/labs - get all labs", () => {
        cy.request({
            method: "GET",
            url: "/api/labs",
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNDMwMzA3Mi1iOWFlLTQ4MjQtOTc5Ni03Yzg3MGUxMmE4ZmYiLCJlbWFpbCI6InRlc3QxNzg5MzE3Nzc2MDI5QGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJzdGF0dXMiOiJhY3RpdmUiLCJpYXQiOjE3ODkzMTgwNzAsImV4cCI6MTc4OTQwNDQ3MH0.qOK84HsdVcMbMOXm0QCr7CRhgwSc6ncEiXwkNSuqUCs" },
        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.be.oneOf([200, 201]);
        });
    });
});