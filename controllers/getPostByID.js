const db = require("../models");
const Post = db.posts;

async function getPostByID(req,res) {
    const id = req.params.id;
    const post = await Post.findByPk(id);
    if(post) {
        res.status(200).json({
            post_title: post.post_title,
            post_content: post.post_content,
            likes: post.likes,
        });
    }
    else {
        res.status(404).json({message: "Post not found!"});
    }
}

module.exports = {
    getPostByID
}