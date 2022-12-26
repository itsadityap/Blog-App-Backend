const db = require('../models')
const randomID = require('../controllers/randomIDGenerator');
const Post = db.posts;
const jwt = require('jsonwebtoken');

async function createPost(req,res)  {
    const {post_title, post_content, category, keywords} = req.body;
    const id = randomID.generateRandomId();

    if(!post_title || !post_content || !category || !keywords) {
        return res.status(400).json({
            message: "Please fill all the fields."
        })
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userData = decoded;

    try {
        const post = await Post.create({
            post_id: id,
            post_title: post_title,
            post_content: post_content,
            category: category,
            keywords: keywords,
            user_id:req.userData.id,
            likes: 0,
            comments_count: 0
        })
        return res.status(200).json({message: "Post created successfully.", post_id: id})
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}

module.exports = {
    createPost
}