Feature: Login no site da NEXDOM
    Scenario: Usuária realiza login com credenciais válidas
        Given que a usuária acessa a página de login
        When ela insere um email e senha válidos
        And clica no botão de login
        Then o sistema deve redirecioná-la para a página inicial

