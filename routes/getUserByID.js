const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const getUserByIDController = require("../controllers/getUserByID");

router.get('/users/:id',
             checkAuth
            ,getUserProfile);

async function getUserProfile(req, res) {
    getUserByIDController
        .getUserByID(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;