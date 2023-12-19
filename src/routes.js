import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import ReserveController from './controllers/ReserveController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import { Router } from 'express';

const routes = new Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);

routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);

routes.get('/houses', HouseController.index);

routes.get('/dashboard', DashboardController.show);

routes.get('/reserves', ReserveController.index)

routes.delete('/houses', HouseController.destroy);

routes.delete('/reserves/cancel', ReserveController.destroy);

routes.post('/houses/:house_id/reserve', ReserveController.store)

export default routes;