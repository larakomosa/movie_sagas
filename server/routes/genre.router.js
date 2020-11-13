const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "genres";';
  pool
    .query(queryText)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('Server Side Error', 500);
    });
});

module.exports = router;
