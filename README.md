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

### 📌 [Criação da tela de login - Parte 2](https://trello.com/c/TFnO7zQp) | source code: [`Ex4`]()

- Crie um objeto na `localStorage` que irá conter os usuários cadastrados em sistema (usuário e senha).

- Quando o usuário clicar em "Entrar" será validado se o usuário está cadastrado (comparando o email e senha com os dados da `localStorage`).

- Caso o usuário esteja cadastrado, redirecionar para a "home"; senão, exibir um alerta dizendo "Usuário ou senha inválidos".

- Caso o usuário clique no botão "Esqueci a senha" a senha do usuário será alterada para a senha padrão "a1b2c4d4" e o usuário será avisado para prosseguir utilizando essa senha.

- Caso o usuário clique no botão/link "Cadastrar-me", ele será redirecionado para a tela de cadastro.

### 📌 [Criação da tela de cadastro](https://trello.com/c/DRqG4rTJ) | source code: [`Ex5`]()

- Crie os inputs "Nome", "Email", "Data Nascimento", "Senha" e "Confirmar Senha".

- Crie o botão "Cadastrar", que deve validar a senha e armazenar email e senha no `localStorage`.

- Crie o botão "Voltar", que deve redirecionar para a tela de login.

# Demonstração

Veja uma **demo** da aplicação [aqui](). 
