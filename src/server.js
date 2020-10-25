const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
})

app.listen(3001, () => {
  console.log('Server started on port 3001!');
})