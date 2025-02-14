 Scenario: Contatar a empresa
    Given que estou na página de contato
    When preencho os campos obrigatórios e não obrigatórios
    And marco o checkbox de aceite
    And clico no botão de Enviar
    Then o sistema deve apresentar uma mensagem de confirmação.