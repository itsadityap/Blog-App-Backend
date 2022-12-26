const db = require("../models");
const User = db.users;
const Comment = db.comments;
const Post = db.posts;

async function getUserByID(req, res) 
{
    const id = req.params.id;
    const user = await User.findByPk(id);

    const userComments = await Comment.findAll({
        where: {
            user_id: id
        }
    })

    const userPosts = await Post.findAll({
        where: {
            user_id: id
        }
    })

    const commentData = userComments.map((comment) => {
        return {
            comment_content: comment.comment_content,
            comment_id: comment.comment_id,
            comments_on_post: comment.post_id,
            comment_date: comment.createdAt
        }
    })

    const postData = userPosts.map((post) => {
        return {
            post_title: post.post_title,
            post_content: post.post_content,
            post_id: post.post_id,
            post_date: post.post_date,
            post_likes: post.likes,
            post_category: post.category,
            posts_keywords: post.keywords,
            post_creation_date: post.createdAt
        }
    })

    const userData = {
        user_id: user.user_id,
        user_name: user.user_name,
        user_email: user.user_email,
        joining_date: user.createdAt,
    }

    if(user) 
    {
        res.status(200).json({userData, commentData, postData});
    } 
    else 
    {
        res.status(404).json({ message: "User not found!" });
    }
}

module.exports = {
    getUserByID
}