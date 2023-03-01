require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.JBPORT
});

module.exports = db;
