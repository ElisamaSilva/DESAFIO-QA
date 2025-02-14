## Desafio QA
Foi utilizado o prório VScode para a criação dos Cenários de teste e demais fluxos a fim de manter todas as dependencias do desafio em apenas um local.

## Instruções para download, configuração e execução dos testes
1. Acesse o projeto atráves do link: https://github.com/ElisamaSilva/DESAFIO-QA
2. Clone o repositório com o comando: git clone https://github.com/ElisamaSilva/DESAFIO-QA.git
3.  Acesse a pasta do projeto: cd seu-repositorio

## Configure o ambiente
1. Certifique-se de ter o Node.js instalado. Caso não tenha, baixe e instale a partir de [nodejs.org](https://nodejs.org/).
2. Instale as dependências do projeto com: npm install

## Execução dos testes
1. Para executar os testes em modo interativo: npx cypress open
   - Na interface do Cypress, selecione o navegador desejado e execute os testes.
2. Para rodar os testes no modo headless (linha de comando): npx cypress run
Os resultados dos testes serão exibidos no terminal e armazenados na pasta `cypress/videos` e `cypress/screenshots` caso ocorra falha nos testes.

## Para rodar o teste de API execute no terminal o comando abaixo:
npx cypress run --spec cypress/e2e/api-github.cy.js



