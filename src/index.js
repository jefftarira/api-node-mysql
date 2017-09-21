/* eslint-disable no-console */
import express from 'express';

import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules';

const app = express();

const PORT = 3000;

middlewaresConfig(app);

apiRoutes(app);

app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log('====================================');
    console.log(`Server running on port : ${PORT}`);
    console.log('====================================');
  }
});
