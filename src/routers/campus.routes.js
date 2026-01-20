import { Router } from "express";
import * as ctl from './../controllers/campus.controller.js'

const router = Router();

router.get("/", ctl.home)
router.get(["/info", "/about"], ctl.info)
router.get('/id/:id', ctl.campusByID);
router.get('/search', ctl.home);

export default router;