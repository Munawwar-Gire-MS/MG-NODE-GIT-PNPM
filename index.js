// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from PNPM Node 22 app on Azure!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

