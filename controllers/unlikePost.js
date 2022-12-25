const db = require("../models");
const Post = db.posts;

async function unlikePost(req,res) {
    const post_id = req.body.post_id;

    const post = await Post.findByPk(post_id);

    if(post) 
    {   
        if(post.likes <= 0) {
            res.status(400).json({message: "Post already unliked!"});
            return;
        }
        await post.decrement('likes');
        res.status(200).json({message: "Post unliked successfully."});
    }
    else {
        res.status(404).json({message: "Post not found!"});
    }
}

module.exports = {
    unlikePost
}