module.exports = (sequelize, Sequelize) => {
    const posts = sequelize.define("posts", {
        post_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        post_title: {
            type: Sequelize.STRING
        },
        post_content: {
            type: Sequelize.STRING
        },
        category:{
            type: Sequelize.STRING
        },
        keywords: {
            type: Sequelize.STRING
        },
        comments_count:{
            type: Sequelize.INTEGER
        },
        likes: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return posts;
};