const jwt = require('jsonwebtoken');
const db = require("../models");
const Comment = db.comments;
const Post = db.posts;

async function deleteComment(req,res) {
    const id = req.params.id;
    const comment = await Comment.findByPk(id);

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userData = decoded;
    
    if(comment) 
    {   
        if(comment.user_id !== req.userData.id) 
        {
            return res.status(401).json({message: "You are not authorized to delete this comment."});
        }
        await comment.destroy({
            where: { comment_id: id }
        })
        const post = await Post.findByPk(comment.post_id);
        await post.decrement('comments_count');

        res.status(200).json({message: "Comment deleted successfully."});
    }
    else {
        res.status(404).json({message: "Comment not found!"});
    }
}

module.exports = {
    deleteComment
}