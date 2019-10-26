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

17. Instalar o Reactotron para melhor depuração
    `yarn add reactotron-react-js`

18. Criar a configuração do reactotron em src/config/ReactotronConfig.js

19. Importar o Reactotron no App.js

20. Configurar o redirecionamento de usuários segundo restriçnoes de logado e
    não logado e rotas privadas em src/routes/Route.js

21. Instalar os Prop-Types para atuar nas validações
    `yarn add prop-types`

22. Aplicar os Prop-Types em src/routes/Route.js

23. Importar Route em src/routes/index.js e definir rotas privadas como isPrivate

24. Criar os layouts:
    pages/\_layouts/auth/index.js
    pages/\_layouts/default/index.js

25. Instalar o styled-components
    `yarn add styled-components`

26. Criar os arquivos de estilização e importar o styled-components neles.
    pages/\_layouts/auth/styles.js
    pages/\_layouts/default/styles.js

27. Importar os styles e definir suas prop-types nos \_layouts/\*/index.js

28. Importar os Layouts em routes/Route.js

29. Criar os estilos globais em src/styles/global.js

30. Importar o global.js em src/App.js

31. Instalar libraries para auxiliar no caminho de rotas de importação
    `yarn add customize-cra react-app-rewired -D`

32. Criar o arquivo config-overrides.js

33. Instalar a library de plugin do babel para aplicar ao config-overrides.js
    `yarn add babel-plugin-root-import -D`

34. Mudar os scripts em package.json para aplicar o react-app-rewired

35. Instalar a library para corrigir os erros que o eslint está reportando sobre
    as novas modificações de imports
    `yarn add eslint-import-resolver-babel-plugin-root-import -D`

36. Criar o arquivo jsconfig.json na raiz da aplicação para algumas configurações
    para o vscode com os problemas dos imports implementados

37. Desenvolver as pages e estilos abaixo:
    src/pages/SignIn/index.js
    src/pages/SignUp/index.js
    src/pages/\_layouts/auth/index.js
    src/pages/\_layouts/auth/styles.js

38. Instalar a lib para deixar os botões de hover "bonitinhos"
    `yarn add polished`

39. Instalar o unform
    `yarn add @rocketseat/unform`

40. Aplicar o unform nos arquivos
    src/pages/SignIn/index.js
    src/pages/SignUp/index.js

41. Instalar o Yup que ajuda para fazer validação, tanto no forntend quanto no backend
    `yarn add yup`

42. Aplicar o Yup e os schemas de validação a:
    src/pages/SignIn/index.js
    src/pages/SignUp/index.js

43. Iniciar a implantação do Redux, iniciando pela instalação das seguintes libraries:
    `yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer`

44. Criar os arquivos e configurar o Redux
    src/store/index.js
    src/store/createStore.js
    src/store/modules/rootReducer.js
    src/store/modules/rootSaga.js
    src/store/modules/auth/actions.js
    src/store/modules/auth/reducer.js
    src/store/modules/auth/sagas.js

45. Instalar o Axios para fazer requisições na API do backend
    `yarn add axios`

46. Criar o arquivo src/services/api.js para configuração do axios

47. Implementar as novas configurações da store em:
    src/pages/SignIn.js
    src/routes/Route.js
    src/services/api.js
    src/store/modules/auth/actions.js
    src/store/modules/auth/reducer.js
    src/store/modules/auth/sagas.js

48. Neste momento será configurado os estados para o usuário, portanto necessário
    a criação dos seguintes arquivos:
    src/store/modules/user/actions.js
    src/store/modules/user/reducer.js
    src/store/modules/user/sagas.js

49. Para trabalhar com a persistência do usuário autenticado, instalar a lib:
    `yarn add redux-persist`

50. Implementar o uso do redux-persist
    src/store/persistReducers.js

51. Implementar o Loading de autenticação

52. Instalar o Toast para notificações mais bonitas
    `yarn add react-toastify`

53. Desenvolver as actions e suas configs secundárias para a função de cadastro
    de usuario na aplicação

54. Implementar a função para manter todas as requisições autorizadas no Axios
    com o token persistido e autenticado.

55.
