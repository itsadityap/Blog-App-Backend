module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }

  });
  
  return users;
};