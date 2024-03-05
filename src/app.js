/**
 * Imports necessary modules for the Express application.
 *
 * express The Express.js web application framework.
 * http The Node.js built-in HTTP module.
 * body-parser Middleware for parsing incoming request bodies.
 * cookie-parser Middleware for parsing cookies.
 * compression Middleware for compressing response bodies.
 * cors Middleware for enabling Cross-Origin Resource Sharing (CORS).
 * @module App
 */
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import session from 'express-session';
import router from "./router.js";

/**
 * Creates an instance of the Express application.
 *
 * @type {Express}
 */
const app = express();


/**
 * Configures session middleware for the api.
 */
app.use(session({
    secret: "652se78s75sa",
    resave: false,
    saveUninitialized: true,
}))

/**
 * Compresses response bodies to reduce network traffic and improve performance.
 */
app.use(compression());

/**
 * Parses cookies from incoming requests.
 */
app.use(cookieParser());

/**
 * Parses incoming request bodies as JSON.
 */
app.use(bodyParser.json());


const server = http.createServer(app);

/**
 * Uses the registered routes in the router
 */
app.use(router);


export {app, server};
