describe('Contatar a empresa', () => {
  it('Deve contatar a empresa com sucesso', () => {
    cy.visit('https://nexdom.tec.br/contato');
    
    cy.get('#form-field-name').type('Elisama Silva');
    cy.get('#form-field-email').type('ealves@gmail.com');
    cy.get('#form-field-message').type('NEXDOM');
    cy.get('#form-field-field_67e0483').type('Analista de Qualidade');
    cy.get('#form-field-field_5778e7b').type('11999999999');
    cy.get('#form-field-field_f77a763').type('Teste ');
    cy.get('#form-field-field_7651528').click();
    cy.get('.elementor-field-type-submit > .elementor-button').click();
    cy.get('.elementor-message').should('contain.text', 'As suas respostas foram recebidas com sucesso!');

    
  });
});