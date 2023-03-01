const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', (req, res) => {
  controllers.getAll(req, res);
});

router.get('/:appId', (req, res) => {
  controllers.getApp(req, res);
});

router.post('/', (req, res) => {
  controllers.addApp(req, res);
});

router.put('/:appId', (req, res) => {
  controllers.updateApp(req, res);
});

router.delete('/:appId', (req, res) => {
  controllers.deleteApp(req, res);
});

module.exports = router;