const express = require("express");

const server = express();

// imports
const authRouter = require("../auth/authRouter");
const userRouter = require("../users/userRouter");

// middlewares
server.use(express.json());

// routes
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
