require('dotenv/config');
import userRoutes from "./routes/User";
import listRoutes from "./routes/List";

const express = require('express');
const cors = require('cors');

class App {
    server: any;
    constructor(){
        this.server = express();
        this.middlewares();
    }
    middlewares(){
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
        this.server.use(cors());
    }

}

module.exports = new App().server;