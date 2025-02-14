const token = "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"; 
const username = "ElisamaSilva"; 
let repoName = "DSFQA" + Math.random().toString(36).substring(2, 10);

describe("Testes API do GitHub", () => {
  
  it("Criar um repositório", () => {
    cy.request({
      method: "POST",
      url: "https://api.github.com/user/repos",
      headers: { Authorization: `token ${token}` },
      body: { name: repoName, private: false },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("Consultar o repositório criado", () => {
    cy.request({
      method: "GET",
      url: `https://api.github.com/repos/${username}/${repoName}`,
      headers: { Authorization: `token ${token}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(repoName);
    });
  });

  it("Criar uma issue no repositório", () => {
    cy.request({
      method: "POST",
      url: `https://api.github.com/repos/${username}/${repoName}/issues`,
      headers: { Authorization: `token ${token}` },
      body: { title: "Issue de Teste", body: "Criada via automação" },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("Consultar a issue criada", () => {
    cy.request({
      method: "GET",
      url: `https://api.github.com/repos/${username}/${repoName}/issues`,
      headers: { Authorization: `token ${token}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("Excluir o repositório", () => {
    cy.request({
      method: "DELETE",
      url: `https://api.github.com/repos/${username}/${repoName}`,
      headers: { Authorization: `token ${token}` },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("Verificar se o repositório foi deletado", () => {
    cy.request({
      method: "GET",
      url: `https://api.github.com/repos/${username}/${repoName}`,
      headers: { Authorization: `token ${token}` },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

});
