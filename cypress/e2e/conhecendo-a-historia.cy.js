describe("Teste Conhecendo a História da NexDom", () => {
  it("Deve mostrar um pagina contando a história da empresa", () => {
    cy.visit("https://nexdom.tec.br");
    cy.get('.elementor-element-267681a').click();
    cy.get('.elementor-element-22ee8c0 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click();
    cy.get('.elementor-element-2c1ead3').scrollIntoView({ duration: 8000 });

  });
});

