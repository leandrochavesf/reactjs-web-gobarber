# Módulo 09 - GoBarber Web - Fase 05

## Ambiente inicial e conceitos

### Lesson: "Estrutura configurada"

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

### Lesson: "Ajustes na API"

11. Realizar atualizações na API do Módulo 03

### Lesson: "Configurando rotas"

12. Instalar o react-router-dom para navegação na web
    `yarn add react-router-dom`

13. Criar as pastas e arquivos (Para os arquivos colocar o snippet rfc):
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

14. Instalar o history que auxilia na navegação entre as telas
    `yarn add history`

15. Importar e definir as rotas em `routes/index.js` com todas as pages criadas

16. Importar o `routes/index.js` em `App.js`

17. Configurar o `services/history`.js`

18. Importar o `history` em colocar no component tag `Router` em `App.js`

### Lesson: "Configurando Reactotron"

19. Instalar o Reactotron para melhor depuração
    `yarn add reactotron-react-js`

20. Baixar o aplciativo do Reactotron e deixar executando na maquina

21. Criar a configuração do reactotron em `src/config/ReactotronConfig.js`

22. Importar o Reactotron no `App.js`

### Lesson: "Rotas privadas"

23. Configurar o redirecionamento de usuários segundo restrições de logado e
    não logado e rotas privadas em `src/routes/Route.js`

24. Instalar os Prop-Types para atuar nas validações
    `yarn add prop-types`

25. Aplicar os Prop-Types em `src/routes/Route.js`

26. Importar Route em `src/routes/index.js` e definir rotas privadas passando a
    propriedade `isPrivate`

### Lesson: "Layouts por página"

27. Criar os layouts:
    `pages/_layouts/auth/index.js`
    `pages/_layouts/default/index.js`

28. Instalar o styled-components
    `yarn add styled-components`

29. Criar os arquivos de estilização e importar o styled-components neles.
    `pages/_layouts/auth/styles.js`
    `pages/_layouts/default/styles.js`

30. Importar os styles e definir suas prop-types nos `_layouts/*/index.js`

31. Importar os Layouts em `routes/Route.js`

### Lesson: "Estilos globais"

32. Criar os estilos globais em src/styles/global.js

33. Importar o global.js em src/App.js

### Lesson: "Utilizando Root Import"

34. Instalar libraries para auxiliar no caminho de rotas de importação usando o `~`
    `yarn add customize-cra react-app-rewired -D`

35. Criar o arquivo `config-overrides.js`

36. Instalar a library de plugin do babel para aplicar ao `config-overrides.js`
    `yarn add babel-plugin-root-import -D`

37. Mudar os scripts em `package.json` para aplicar o react-app-rewired

38. Instalar a library para corrigir os erros que o eslint está reportando sobre
    as novas modificações de imports
    `yarn add eslint-import-resolver-babel-plugin-root-import -D`

39. Criar o arquivo `jsconfig.json` na raiz da aplicação para que o VSCode entenda
    corretamente quando clicar para navegar nos imports

## Cadastro e autenticação de usuários

### Lesson: "Estilização da autenticação"

40. Desenvolver as pages e estilos abaixo:
    `src/pages/SignIn/index.js`
    `src/pages/SignUp/index.js`
    `src/pages/\_layouts/auth/index.js`
    `src/pages/\_layouts/auth/styles.js`

41. Instalar a lib para deixar os botões de hover "bonitinhos" aplciando transparências
    mais facilmente.
    `yarn add polished`

### Lesson: "Utilizando Unform"

42. Instalar o Unform
    `yarn add @rocketseat/unform`

43. Aplicar o unform nos arquivos
    `src/pages/SignIn/index.js`
    `src/pages/SignUp/index.js`

### Lesson: "Validações"

44. Instalar o Yup que ajuda para fazer validação, tanto no forntend quanto no backend
    `yarn add yup`

45. Aplicar o Yup e os schemas de validação a:
    `src/pages/SignIn/index.js`
    `src/pages/SignUp/index.js`

### Lesson: "Configurando Store"

46. Iniciar a implantação do Redux, iniciando pela instalação das seguintes libraries:
    `yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer`

47. Criar os arquivos e configurar o Redux
    `src/store/index.js`
    `src/store/createStore.js`
    `src/store/modules/rootReducer.js`
    `src/store/modules/rootSaga.js`
    `src/store/modules/auth/actions.js`
    `src/store/modules/auth/reducer.js`
    `src/store/modules/auth/sagas.js`

48. Importar e aplciar a store em `App.js` dentro de `<Provider>`

### Lesson: "Autenticação"

49. Instalar o Axios para fazer requisições na API do backend
    `yarn add axios`

50. Criar o arquivo `src/services/api.js` para configuração do axios

51. Implementar as novas configurações da store em:
    `src/pages/SignIn.js`
    `src/routes/Route.js`
    `src/services/api.js`
    `src/store/modules/auth/actions.js`
    `src/store/modules/auth/reducer.js`
    `src/store/modules/auth/sagas.js`

### Lesson: "Armazenando perfil"

52. Neste momento será configurado os estados para o usuário, portanto necessário
    a criação dos seguintes arquivos:
    `src/store/modules/user/actions.js`
    `src/store/modules/user/reducer.js`
    `src/store/modules/user/sagas.js`

### Lesson: "Persistindo autenticação"

53. Para trabalhar com a persistência do usuário autenticado, instalar a lib:
    `yarn add redux-persist`

54. Implementar o uso do redux-persist
    src/store/persistReducers.js

### Lesson: "Loading da autenticação"

55. Implementar o Loading de autenticação por dentro dos Reducers de `auth`

### Lesson: "Exibindo toasts"

56. Instalar o Toast para notificações mais bonitas
    `yarn add react-toastify`

### Lesson: "Cadastro na aplicação"

57. Desenvolver as actions e suas configs secundárias para a função de cadastro
    de usuario na aplicação

### Lesson: "Requisições autenticadas"

58. Implementar a função para manter todas as requisições autorizadas no Axios
    com o token persistido e autenticado.

## Configurando o header e notificações

### Lesson: "Configurando Header"

59. Desenvolver a página Header da aplicação e seus estilos
    `src/components/Header/index.js`
    `src/components/Header/styles.js`

### Lesson: "Estilizando notificações"

60. Começar a estilização da função de Notifications
    `src/components/Notifications/index.js`
    `src/components/Notifications/styles.js`

61. Instalar o pacote de icones para o react
    `yarn add react-icons`

62. Instalar modulo para trabalhar com scrollbar nas Notifications
    `yarn add react-perfect-scrollbar`

### Lesson: "Notificações"

63. Desenvolver a parte de notificações, com busca na API e melhorias

64. Instalar o date-fns para trabalhar com datas
    `yarn add install date-fns@next`

## Funcionalidades do perfil

### Lesson: "Página de perfil"

65. Desenvolver a página de perfil

### Lesson: "Atualizando perfil"

66. Desenvolver funções de atualização do perfil

### Lesson: "Foto de perfil"

67. Implementar a funcionalidade de cadastro de avatar

### Lesson: "Dados do Header"

68. Buscar dados do usuário e colocar em tempo real no header

### Lesson: "Logout da aplicação"

69. Aplicar funcionalidade de logout do usuário

## Funcionalidades da Dashboard

### Lesson: "Estilização do Dashboard"

70. Criar a pagina de Dashboard

### Lesson: "Navegando entre dias"

71. Adicionar navegação entre os dias no Dashboard

### Lesson: "Listando agendamentos"

72. Aplicar a listagem dos agendamentos disponíveis

73. Instalar a função de Timezone
    `yarn add date-fns-tz`
