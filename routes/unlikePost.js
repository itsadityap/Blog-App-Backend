const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const unlikePostController = require("../controllers/unlikePost");

router.post('/unlike',
            checkAuth,
            unlikePost);

async function unlikePost(req, res) {
    unlikePostController
        .unlikePost(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;