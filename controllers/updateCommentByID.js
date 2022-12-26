const jwt = require('jsonwebtoken');
const db = require("../models");
const Comment = db.comments;

async function updateComment(req,res) 
{
    const id = req.params.id;
    const comment = await Comment.findByPk(id);

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userData = decoded;
    
    if(comment) 
    {   
        if(comment.user_id !== req.userData.id) 
        {
            return res.status(401).json({message: "You are not authorized to update this comment."});
        }
        await comment.update({
            comment_content: req?.body?.comment_content,
        },{
            where: { comment_id: id }
        })
        res.status(200).json({message: "Comment updated successfully."});
    }
    else 
    {
        res.status(404).json({message: "Comment not found!"});
    }
}

module.exports = {
    updateComment
}