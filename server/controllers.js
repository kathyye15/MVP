const models = require('./models');

const getAll = (req, res) => {
  models.getAll()
    .then((app) => {
      if (app.rows) {
        res.send(app.rows)
      } else {
        res.send(`Database is empty. Nothing to get.`)
      }
    })
    .catch(e => res.status(400).send('Failed to retrieve apps, error: ', e.message))
};

const getApp = (req, res) => {
  const appId = req.params.appId;
  models.getApp(appId)
    .then((app) => {
      if (app.rows[0]) {
        res.send(app.rows[0])
      } else {
        res.send(`id ${appId} not found in database. Nothing to get.`)
      }
    })
    .catch(e => res.status(400).send('Failed to retrieve app, error: ', e.message))
};

const addApp = (req, res) => {
  const appInfo = req.body;
  models.addApp(appInfo)
    .then(() => res.send('successfully added!'))
    .catch(e => res.status(400).send('Failed to insert to database, error: ', e.message));
};

const updateApp = (req, res) => {
  const appId = req.params.appId;
  const appInfo = req.body;
  models.updateApp(appId, appInfo)
    .then((updated) => {
      if (updated.rowCount > 0) {
        res.send(`id ${appId} successfully updated!`)
      } else {
        res.send(`id ${appId} not found in database. Nothing to update.`)
      }
    })
    .catch(e => res.status(400).send('Failed to update application, error: ', e.message));
};

const deleteApp = (req, res) => {
  const appId = req.params.appId;
  models.deleteApp(appId)
    .then((deleted) => {
      if (deleted.rowCount > 0) {
        res.send(`id ${appId} successfully deleted!`)
      } else {
        res.send(`id ${appId} not found in database. Nothing to delete.`)
      }
    })
    .catch(e => res.status(400).send('Failed to retrieve app, error: ', e.message))
};

module.exports = {
  getAll,
  getApp,
  addApp,
  updateApp,
  deleteApp
};