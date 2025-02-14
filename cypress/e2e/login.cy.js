describe("Teste de Login", () => {
    it("Deve realizar login com credenciais válidas", () => {
      cy.visit("https://nexdom.tec.br/login");
      cy.get("#email").type("usuario@teste.com");
      cy.get("#password").type("senha123");
      cy.get("button[type='submit']").click();
      cy.url().should("include", "/dashboard");
    });
  });

  