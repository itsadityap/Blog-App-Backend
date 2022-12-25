const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const likePostController = require("../controllers/likePost");

router.post('/like',
            checkAuth,
            likePost);

async function likePost(req, res) {
    likePostController
        .likePost(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;