const db = require("../models");
const Comment = db.comments;

async function getAllComments(req,res) {
    const comment = await Comment.findAll({
        attributes: ['comment_content']
    }
    );
    if(comment) {
        res.status(200).json(comment);
    }
    else {
        res.status(404).json({message: "Comment not found!"});
    }
}

module.exports = {
    getAllComments
}