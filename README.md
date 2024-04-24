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

### [📌 Construção do perfil](https://docs.google.com/document/d/1YlWsxrtAeE_lHIrlMS7Lyc_lEo1vDYne40hnEoUMkPw/edit) | source code: [`M1S10-Ex3`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S10-Ex3)

- Acrescente informações do usuário (peso, altura, etc) para exibir no perfil. :heavy_check_mark:

- Crie um `pipe` para converter a altura de centímetros para metros. :heavy_check_mark:

### [📌 Exibição das dietas](https://docs.google.com/document/d/1YlWsxrtAeE_lHIrlMS7Lyc_lEo1vDYne40hnEoUMkPw/edit) | source code: [`M1S10-Ex4`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S10-Ex4)

- Exibir mensgaem de boas-vindas na `home`. :heavy_check_mark:

- Exibir lista de dietas. :heavy_check_mark:

- Atualizar rota para `diet-detail`. :heavy_check_mark:

### [📌 Detalhamento das dietas](https://docs.google.com/document/d/1YlWsxrtAeE_lHIrlMS7Lyc_lEo1vDYne40hnEoUMkPw/edit) | source code: [`M1S10-Ex5`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S10-Ex5)

- Crie um evento de clique para redirecionar para a tela de detalhamento da dieta. :heavy_check_mark:

### [📌 CEP Service](https://docs.google.com/document/d/1YlWsxrtAeE_lHIrlMS7Lyc_lEo1vDYne40hnEoUMkPw/edit) | source code: [`M1S10-Ex6`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S10-Ex6)

- Crie um `service` com um método para recuperar o endereço a partir do CEP. :heavy_check_mark:

### [📌 Consulta CEP](https://docs.google.com/document/d/1YlWsxrtAeE_lHIrlMS7Lyc_lEo1vDYne40hnEoUMkPw/edit) | source code: [`M1S10-Ex7`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S10-Ex7)

- Implemente a consulta do CEP usando a API do [viacep](https://viacep.com.br/). :heavy_check_mark:

- Exiba os dados do CEP consultado. :heavy_check_mark:

# [M1S11] Keep Health App (continuação)

Os exercícios desta semana estão voltados para os conceitos de: **Módulos**, **Estilização** (SASS, Responsividade e bibliotecas externas) e **Validação de Formulários**.

## Tarefas

### [📌 Modularização](https://trello.com/c/s4Jg5U6K) | source code: [`M1S11-Ex1`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S11-Ex1)

- Modularize os componentes da pasta `shared`. :heavy_check_mark:

### [📌 Estilização](https://trello.com/c/n4CKMYA3) | source code: [`M1S11-Ex2`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S11-Ex2)

- Configure o projeto para trabalhar com **SCSS**. :heavy_check_mark:

### [📌 Responsividade](https://trello.com/c/oa6r12MM) | source code: [`M1S11-Ex3`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S11-Ex3)

- Utilize media queries para deixar a `home` responsiva. :heavy_check_mark:

### [📌 Validação de formulário](https://trello.com/c/phmdsZ7F) | source code: [`M1S11-Ex4`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S11-Ex4)

- Inclua a validação de campos obrigatórios (required), juntamente com as labels para feedback visual em cada input no componente **profile**. :heavy_check_mark:

### [📌 Home - Part 1](https://trello.com/c/UrS1gyrk) | source code: [`M1S11-Ex5`](https://github.com/vb-ferreira/fmt-keep-health/commit/611c579da2888822b9e3d9b1167ddef7f0b53c40)

- Crie um botão "‘"Adicionar atividade" que, ao clicado, abrirá um dialog do PrimeNG. :heavy_check_mark:

- Salve os dados do formulário na `localStorage`. :heavy_check_mark:

### [📌 Home - Part 2](https://trello.com/c/NcVZ6mxS) | source code: [`M1S11-Ex6`](https://github.com/vb-ferreira/fmt-keep-health/commit/e7bebabd3b15df635fab7939671fcbcfd3f40d3d)

- Crie um card que irá representar as atividades realizadas. :heavy_check_mark:

# [M1S12] Keep Health App (continuação)

Guardas de rota, otimização, build e deploy.

## Tarefas

### [📌 Guarda de Rota](https://trello.com/c/dbBSAihj) | source code: [`M1S12-Ex1`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S12-Ex1)

- Crie um guarda de rota do tipo `CanActivate` na pasta `shared`. A ideia é que apenas as rotas `home`, `diet` e `profile` possuam esse guarda. :heavy_check_mark:

### [📌 Guarda de Rota](https://trello.com/c/QYCmDptX) & [📌 Lazy Loading](https://trello.com/c/Q8qUpUEb)| source code: [`M1S12-Ex2-Ex3`](https://github.com/vb-ferreira/fmt-keep-health/releases/tag/M1S12-Ex1-Ex3)

- Crie um guarda de rota do tipo `ActivateChild` para a rota filha do módulo `diet`. :heavy_check_mark:

- Utilizando o conceito de lazy loading, crie um módulo de rotas separado para as rota do `diet` e, através da importação `loadChildren`, adicione esse módulo no arquivo `app.routes.ts`. :heavy_check_mark:

# Demonstração

Veja uma **demo** da aplicação [aqui](https://fmt-keep-health.vercel.app/). 
