const db = require("../models");
const Comment = db.comments;

async function getCommentByID(req,res) {
    const id = req.params.id;
    const comment = await Comment.findByPk(id);
    console.log(comment);
    if(comment) {
        res.status(200).json({
            comment_content: comment.comment_content,
        });
    }
    else {
        res.status(404).json({message: "Comment not found!"});
    }
}

module.exports = {
    getCommentByID
}