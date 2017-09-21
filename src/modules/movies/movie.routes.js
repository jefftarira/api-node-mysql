import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('Ruta de movie');
});

export default routes;
