# Módulo 09 - GoBarber Web

## Installation Steps

1. Instalar o react a partir do react-app
   `yarn create react-app modulo09`

2. Instalar o ESLint como uma dependencia de desenvolvimento
   `yarn add eslint -D`

3. Executar o ESLint
   `yarn eslint --init`

4. Apagar o package.json.lock do NPM e rodar um `yarn`

5. Instalar o Prettier como uma dependencia de desenvolvimento
   `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

6. Usa o esLint para avisar se estamos usando os Hooks de forma errada
   `yarn add eslint-plugin-react-hooks -D`

7. Instalar o babel para o eslint
   `yarn add babel-eslint`

8. Configura o .prettierrc

9. Configura o .editorconfig

10. Configura o .eslintrc.js

11. Instalar o react-router-dom para navegação na web
    `yarn add react-router-dom`

12. Criar as pastas e arquivos (Para os arquivos colocar o snippet rfc):
    src/pages
    src/pages/Dashboard
    src/pages/Dashboard/index.js
    src/pages/Profile
    src/pages/Profile/index.js
    src/pages/SignIn
    src/pages/SignIn/index.js
    src/pages/SignUp
    src/pages/SignUp/index.js
    src/routes
    src/routes/index.js
    src/services
    src/services/history.js

13. Instalar o history que auxilia na navegação entre as telas
    `yarn add history`

14. Importar e definir as rotas em routes/index.js com todas as pages criadas

15. Importar o routes/index em app.js

16. Configurar o services/history.js
