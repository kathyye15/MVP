const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', (req, res) => {
  controllers.getAll(req, res);
});


module.exports = router;