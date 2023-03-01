const db = require('../database');

const getAll = () => {
    return db.query(`SELECT * FROM applications`);
  };

const getApp = (appId) => {
  return db.query(`SELECT * FROM applications a WHERE a.id = ${appId}`);
};

const addApp = (appInfo) => {
  return db.query(`INSERT INTO applications(name, status, job_title, job_posting, notes) VALUES (
    '${appInfo.name}',
    '${appInfo.status}',
    '${appInfo.job_title}',
    '${appInfo.job_posting}',
    '${appInfo.notes}'
    )`);
};


const updateApp = (appId, appInfo) => {
    return db.query(`
        UPDATE applications
        SET name = '${appInfo.name}',
            status = '${appInfo.status}',
            job_title = '${appInfo.job_title}',
            job_posting = '${appInfo.job_posting}',
            notes = '${appInfo.notes}'
        WHERE id = ${appId};
    `);
}

const deleteApp = (appId) => {
    return db.query(`DELETE FROM applications a WHERE a.id = ${appId}`);
  };

module.exports = {
    getAll,
    getApp,
    addApp,
    updateApp,
    deleteApp
};
