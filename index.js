const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    "message": "Hello, Dave"
  });
});

app.listen(PORT, () => {
  console.log(`Firebase-Express server is up and running on PORT: ${PORT} env: ${app.get('env')}`);
});
