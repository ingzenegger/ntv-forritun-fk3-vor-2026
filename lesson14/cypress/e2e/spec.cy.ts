// describe("My First Test", () => {
//   it("succesfully loads Verkefni 14 login page", () => {
//     cy.visit("http://localhost:5173/login");
//   });
// });

describe("login", () => {
  it("logs in", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Skrá inn").click();
    cy.url().should("include", "login");
    cy.get("input#login-user").type("MyName");
    cy.get("input#login-pass").type("jflkdsæajfælkdsjf");
    cy.get("button").contains("Skrá inn").click();
    cy.url().should("include", "velkomin");
  });
});
