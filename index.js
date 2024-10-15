const express = require('express');
const config = require('./config');
const meteorRoutes = require('./delivery/meteorRoutes');

const app = express();

app.use('/meteors', meteorRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
