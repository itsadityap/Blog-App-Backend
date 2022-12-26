const db = require('../models')
const randomID = require('../controllers/randomIDGenerator');
const jwt = require('jsonwebtoken');
const Comment = db.comments;
const Post = db.posts;

async function createComment(req,res)  
{
    const comment_content = req.body.comment_content;
    const commentid = randomID.generateRandomId();

    if(!comment_content) {
        return res.status(400).json({
            message: "Please fill all the fields."
        })
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userData = decoded;

    try{
        const comment = await Comment.create({
            comment_id: commentid,
            comment_content: comment_content,
            user_id: req.userData.id,
            post_id: req.body.post_id
        })
        return res.status(200).json({message: "Comment created successfully."})
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}

module.exports = {
    createComment
}