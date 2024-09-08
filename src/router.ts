import { Router } from 'express';
import { paramsCtl } from './app/controller/params';
import { nothing } from './app/controller/nothing';

const router: Router = Router()

//Routes
router.get("/", nothing);
router.get("/params", paramsCtl.profile);

export { router };