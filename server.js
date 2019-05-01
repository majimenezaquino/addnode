const express = require('express');
const app = express();

app.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

app.listen(80,'10.160.0.2', () => console.log('listening on port 80'));
