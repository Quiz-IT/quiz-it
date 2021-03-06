require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;

app.use(express.static(`${__dirname}/../client/dist`));
app.listen(port, () => console.log('listening on port ', port));
