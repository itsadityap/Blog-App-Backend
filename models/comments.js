module.exports = (sequelize, Sequelize) => {
    const comments = sequelize.define("comments", {
        comment_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        comment_content: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.STRING
        }
    });
    return comments;
};