const dbConfig = require("../db.config");
const Sequelize = require("sequelize");

// Connection to the database.
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
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
//db.comments = require("./comments")(sequelize, Sequelize);

// Relations
db.users.hasMany(db.posts, { foreignKey: 'user_id', as : 'post' })

db.posts.belongsTo(db.users, { foreignKey: 'user_id', as : 'user' });


module.exports = db;