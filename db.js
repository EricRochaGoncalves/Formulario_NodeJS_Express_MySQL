const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // altere se necessário
  password: 'Y@sp2006', // sua senha do MySQL
  database: 'teste_formulario' // nome do banco
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;
