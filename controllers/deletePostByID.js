const jwt = require('jsonwebtoken');
const db = require("../models");
const Post = db.posts;

async function deletePost(req,res) {
    const id = req.params.id;
    const post = await Post.findByPk(id);

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userData = decoded;
    
    if(post) 
    {   
        if(post.user_id !== req.userData.id) 
        {
            return res.status(401).json({message: "You are not authorized to delete this post."});
        }
        await post.destroy({
            where: { post_id: id }
        })
        res.status(200).json({message: "Post deleted successfully."});
    }
    else {
        res.status(404).json({message: "Post not found!"});
    }
}

module.exports = {
    deletePost
}