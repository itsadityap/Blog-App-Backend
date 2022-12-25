const db = require("../models");
const Post = db.posts;

async function likePost(req,res) {
    const post_id = req.body.post_id;

    const post = await Post.findByPk(post_id);

    if(post) 
    {
        await post.increment('likes');
        res.status(200).json({message: "Post liked successfully."});
    }
    else {
        res.status(404).json({message: "Post not found!"});
    }
}

module.exports = {
    likePost
}