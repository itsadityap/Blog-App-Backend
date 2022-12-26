const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const createPostController = require("../controllers/createPost");
const getpostController = require("../controllers/getPostByID");
const deletePostController = require("../controllers/deletePostByID");
const updatePostController = require("../controllers/updatePostByID");
const getAllPostsController = require("../controllers/getAllPostsByFilters");

router.post('/posts',
             checkAuth
            ,createPost);

router.get('/posts',
            getAllPosts);

router.get('/posts/:id',
            getPost);

router.delete('/posts/:id',
            deletePost);

router.put('/posts/:id',
            updatePost);

async function updatePost(req, res) {
    updatePostController
    .updatePost(req,res)
    .then((data) => {})
    .catch((err) => console.log(err));
}

async function deletePost(req, res) {
    deletePostController
    .deletePost(req,res)
    .then((data) => {})
    .catch((err) => console.log(err));
}

async function getPost(req, res) {
    getpostController
    .getPostByID(req,res)
    .then((data) => {})
    .catch((err) => console.log(err));
}

async function createPost(req, res) {
    createPostController
        .createPost(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

async function getAllPosts(req, res) {
    getAllPostsController
        .getAllPosts(req,res)
        .then((data) => {})
        .catch((err) => console.log(err));
}

module.exports = router;