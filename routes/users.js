const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/users', (req, res) => {
  const usersPath = path.join('data', 'users.json');
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});

router.get('/users/:id', (req, res) => {
  const usersPath = path.join('data', 'users.json');
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.id);
    if (!user) {
      res.send({ message: 'ID de usuario no encontrado' });
      return;
    }
    res.send(user);
  });
});

module.exports = router;
