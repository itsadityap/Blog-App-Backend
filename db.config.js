module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: process.env.DB_PASS,
    DB: "blogapp",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};