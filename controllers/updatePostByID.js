const jwt = require('jsonwebtoken');
const db = require("../models");
const Post = db.posts;

async function updatePost(req,res) {
    const id = req.params.id;
    const post = await Post.findByPk(id);

    const post_content = req?.body?.post_content;
    const post_title = req?.body?.post_title;
    const category = req?.body?.category;
    const keywords = req?.body?.keywords;

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userData = decoded;
    
    if(post) 
    {   
        if(post.user_id !== req.userData.id) 
        {
            return res.status(401).json({message: "You are not authorized to update this post."});
        }
        await post.update({
            post_content: post_content,
            post_title: post_title,
            category: category,
            keywords: keywords
        },
        {
            where: { post_id: id }
        })
        res.status(200).json({message: "Post updated successfully."});
    }
    else {
        res.status(404).json({message: "Post not found!"});
    }
}

module.exports = {
    updatePost
}