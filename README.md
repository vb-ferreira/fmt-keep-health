<div align="center">
  <img src="https://github.com/vb-ferreira/fmt-keep-health/blob/main/img/logo-fmt.png?sanitize=true" width="110" height="110"/>
</div>
<hr>

# [M1S09] Keep Health App

Criar uma aplicação web, utilizando **Angular**, onde os usuários poderão inserir informações pessoais de saúde e as atividades físicas que realizam ao longo da semana.

## Tarefas

### [📌 Criação do projeto](https://trello.com/c/qZ2wRUuo) | source code: [`Ex1`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/Ex1) 

- Crie um novo projeto Angular para o projeto Keep Health. :heavy_check_mark:

### [📌 Estruturação dos componentes iniciais](https://trello.com/c/Iq9Swz0l) | source code: [`Ex2`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/Ex2) 

- Crie uma pasta **shared** e uma subpasta **components** onde serão criados os componentes **header** e **sidebar**. :heavy_check_mark: 

- Crie as seguintes páginas na pasta **app**: **login**, **home** e **cadastro**. :heavy_check_mark:

### 📌 [Criação da tela de login - Parte 1](https://trello.com/c/ace8U05o) | source code: [`Ex3`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/Ex3)

- Neste exercício vamos criar a tela de login que irá conter: 1) Um input para o email do usuário; 2) Um input para a senha; 3) Um botão "Entrar"; 4) Um botão "Esqueci a senha"; Um botão ou link (à sua escolha) para "Cadastrar-me". :heavy_check_mark:

### 📌 [Criação da tela de login - Parte 2](https://trello.com/c/TFnO7zQp) | source code: [`Ex4-Ex5`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/Ex4-Ex5)

- Crie um objeto na `localStorage` que irá conter os usuários cadastrados em sistema (usuário e senha). :heavy_check_mark:

- Quando o usuário clicar em "Entrar" será validado se o usuário está cadastrado (comparando o email e senha com os dados da `localStorage`). :heavy_check_mark:

- Caso o usuário esteja cadastrado, redirecionar para a "home"; senão, exibir um alerta dizendo "Usuário ou senha inválidos". :heavy_check_mark:

- Caso o usuário clique no botão "Esqueci a senha" a senha do usuário será alterada para a senha padrão "a1b2c4d4" e o usuário será avisado para prosseguir utilizando essa senha. :heavy_check_mark:

- Caso o usuário clique no botão/link "Cadastrar-me", ele será redirecionado para a tela de cadastro. :heavy_check_mark:

### 📌 [Criação da tela de cadastro](https://trello.com/c/DRqG4rTJ) | source code: [`Ex4-Ex5`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/Ex4-Ex5)

- Crie os inputs "Nome", "Email", "Data Nascimento", "Senha" e "Confirmar Senha". :heavy_check_mark:

- Crie o botão "Cadastrar", que deve validar a senha e armazenar email e senha no `localStorage`. :heavy_check_mark:

- Crie o botão "Voltar", que deve redirecionar para a tela de login. :heavy_check_mark:

# [M1S10] Keep Health App (continuação)

## Tarefas

### [📌 Menu de navegação](https://docs.google.com/document/d/1YlWsxrtAeE_lHIrlMS7Lyc_lEo1vDYne40hnEoUMkPw/edit) | source code: [`M1S10-Ex1`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S10-Ex1)

- Crie um menu de navegação dentro do componente `sidebar` com as opções "Início", "Dietas" e "Perfil". :heavy_check_mark:

- Crie no `localStorage` um array de alimentos. :heavy_check_mark:

### [📌 Novos componentes](https://docs.google.com/document/d/1YlWsxrtAeE_lHIrlMS7Lyc_lEo1vDYne40hnEoUMkPw/edit) | source code: [`M1S10-Ex2`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S10-Ex2)

- Crie os componentes "diet", "diet-detail" e "profile". :heavy_check_mark:

- Atualize o `app.routes.ts` para que cada rota leve ao respectivo componente. :heavy_check_mark:

# Demonstração

Veja uma **demo** da aplicação [aqui](https://fmt-keep-health.vercel.app/). 
