/**
 * All the routes will be defined here
 * @module Router
 */

import express from "express";
import {receiveData, sendData} from "./controller/dataController.js";

/**
 * Main router
 * @type {Router}
 */
const router = express.Router();


router.get('/data/get', receiveData);

router.post('/data/send', sendData);

export default router;

