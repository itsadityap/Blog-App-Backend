const db = require("../models");
const Post = db.posts;
const { Op } = require("sequelize");

async function getAllPosts(req,res){

    const user_id_posts = req.body.user_id_posts;
    const keywords = req.body.keywords;
    const category = req.body.category;
    const text = req.body.text;
    const orderby = req.body.orderby;
    const order = req.body.order;
    let posts = ''

    try
    {
        if(orderby === "likes" || orderby === "comments_count" || orderby === "createdAt")
            {
                posts = await Post.findAll({
                    where: {
                    [Op.or]: [
                        {
                            keywords: {
                                [Op.like]: `%${keywords}%`
                            }
                        },
                        {
                            category: {
                                [Op.like]: `%${category}%`
                            }
                        },
                        {
                            post_content: {
                                [Op.like]: `%${text}%`
                            }
                        },
                        {
                            user_id: {
                                [Op.eq] : user_id_posts
                            }
                        }
                    ]
                },
                    order: [
                        [`${orderby}`, `${order}`]
                    ]
                });
            }
            
            else
            {
                posts = await Post.findAll({
                    where: {
                        [Op.or]: [
                            {
                                keywords: {
                                    [Op.like]: `%${keywords}%`
                                }
                            },
                            {
                                category: {
                                    [Op.like]: `%${category}%`
                                }
                            },
                            {
                                post_content: {
                                    [Op.like]: `%${text}%`
                                }
                            },
                            {
                                user_id: {
                                    [Op.eq] : user_id_posts
                                }
                            }
                        ]
                    }
                });
        }

        const postData = posts.map((post) => {
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
        if(posts) 
        {
            if(posts.length === 0)
            {
                return res.status(200).json({message: "No such posts found in the database which satisfies all such filters!"});
            }
            res.status(200).json(postData);
        }
        else {
            res.status(404).json({message: "Posts not found!"});
        }
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getAllPosts
}