require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use('/test', router);
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})