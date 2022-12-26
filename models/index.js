//const dbConfig = require("../db.config");
const Sequelize = require("sequelize");

// Connection to the database.
const sequelize = new Sequelize({
    database: "defaultdb",
    username: "doadmin",
    password: process.env.DB_PASS,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
});

sequelize.authenticate()
.then(() => {
    console.log('Connected to the database.')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, Sequelize);
db.posts = require("./posts")(sequelize, Sequelize);
db.comments = require("./comments")(sequelize, Sequelize);

// Relations One to Many
db.users.hasMany(db.posts, { foreignKey: 'user_id', as : 'post' })
db.posts.belongsTo(db.users, { foreignKey: 'user_id', as : 'user' });

db.users.hasMany(db.comments, { foreignKey: 'user_id', as : 'comment' })
db.comments.belongsTo(db.users, { foreignKey: 'user_id', as : 'user' });

db.posts.hasMany(db.comments, { foreignKey: 'post_id', as : 'comment' })
db.comments.belongsTo(db.posts, { foreignKey: 'post_id', as : 'post' });

module.exports = db;