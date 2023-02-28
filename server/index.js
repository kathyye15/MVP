require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/test', router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})