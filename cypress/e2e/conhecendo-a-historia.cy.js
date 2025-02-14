describe("Teste Conhecenco a História da NexDom", () => {
  it("Deve exibir resultados para um serviço válido", () => {
    cy.visit("https://nexdom.tec.br");
    cy.get('.elementor-element-267681a').click();
    cy.get('.elementor-element-22ee8c0 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
    cy.get('.elementor-element-2c1ead3').scrollIntoView({ duration: 8000 });

  });
});

