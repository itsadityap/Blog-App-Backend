const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const createCommentController = require("../controllers/createComment");
const getCommentController = require("../controllers/getCommentByID");
const getAllCommentController = require("../controllers/getAllComments");
const deleteCommentController = require("../controllers/deleteCommentByID");
const updateCommentController = require("../controllers/updateCommentByID");

router.post('/comments',
            checkAuth
            ,createComment);

router.get('/comments/:id',
            getComment)

router.get('/comments',
            getAllComments)

router.delete('/comments/:id',
            checkAuth
            ,deleteComment);

router.put('/comments/:id',
            checkAuth
            ,updateComment)

async function createComment(req, res) {
    createCommentController
        .createComment(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

async function getComment(req, res) {
    getCommentController
        .getCommentByID(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

async function getAllComments(req, res) {
    getAllCommentController
        .getAllComments(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

async function deleteComment(req, res) {
    deleteCommentController
        .deleteComment(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

async function updateComment(req, res) {
    updateCommentController
        .updateComment(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;