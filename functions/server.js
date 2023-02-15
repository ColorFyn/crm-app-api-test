
const express = require("express");
const serverless = require("serverless-http");

const bodyparser = require("body-parser");
const customerRoutes = require("../routes/customerRoutes");
const userRoutes = require("../routes/userRoutes");
const ticketRoutes = require("../routes/ticketRoutes");
const server = express();
const cors = require("cors");

// server.listen(4000);

server.use(bodyparser.json());
server.use((req, res, next)=>{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

server.use(cors());
const router = express.Router();

router.use("/api/customer",customerRoutes.router);
router.use("/api/user",userRoutes.router);
router.use("/api/ticket",ticketRoutes.router);

router.get("/", (req, res)=>{
    res.send("Welcome to CRM API");
});

server.use("/", router);
console.log("Server is listening on 4000");

module.exports.handler = serverless(server);