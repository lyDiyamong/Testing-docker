const express = require("express");
const usersModel = require("../models/users.model");
const userRouter = express.Router();

userRouter
    .route("/")
    .get(async (req, res) => {
        const users = await usersModel.find();
        res.status(200).json(users);
    })
    .post(async (req, res) => {
        const user = await usersModel.create(req.body);

        res.status(201).json(user);
    });

module.exports = userRouter;
