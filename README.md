# 📋 Formulário com Node.js, Express e MySQL

Este projeto é um sistema de formulário web com **HTML no front-end** e um servidor **Node.js + Express no back-end**, conectado a um **banco de dados MySQL**. Ele permite que os usuários preencham um formulário e salvem os dados no banco de dados com segurança.

---

## 🧠 Como Funciona

1. **Usuário acessa o formulário** no navegador (`index.html`).
2. **Ao enviar o formulário**, os dados são enviados por `POST` para o servidor via rota `/cadastro`.
3. O **servidor Express** recebe os dados usando `body-parser` e os insere no banco de dados MySQL.
4. Uma resposta de sucesso ou erro é retornada, e o usuário é redirecionado para uma página com feedback.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no back-end.
- **Express** – Framework para lidar com rotas e requisições HTTP.
- **MySQL** – Banco de dados relacional usado para armazenar os dados.
- **Body-parser** – Middleware para processar os dados enviados pelo formulário.
- **HTML5** – Interface do formulário.

---



