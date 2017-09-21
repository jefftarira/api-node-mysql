import { Router } from 'express';

import * as movieController from './movie.controller';

const routes = new Router();

routes.get('/', movieController.getAll);
routes.post('/', movieController.createMovie);

export default routes;
