const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/enviar', (req, res) => {
  const { nome, email } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
  db.query(sql, [nome, email], (err, result) => {
    if (err) throw err;
    res.send('Dados enviados com sucesso!');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
