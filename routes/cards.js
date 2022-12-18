const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/cards', (req, res) => {
  const cardsPath = path.join('data', 'cards.json');
  fs.readFile(cardsPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
});

module.exports = router;
