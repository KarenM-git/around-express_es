const express = require('express');

const app = express();
const cardsRoutes = require('./routes/cards');
const usersRoutes = require('./routes/users');

app.use('/', cardsRoutes);
app.use('/', usersRoutes);

const notFound = (req, res) => {
  res.status(404);
  res.send({ message: 'Recurso solicitado no encontrado' });
};
app.get('/', notFound);

app.get('*', notFound);

const { PORT = 3000 } = process.env;

app.listen(PORT);
