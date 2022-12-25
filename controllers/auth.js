const jwt = require('jsonwebtoken');
const randomID = require('../controllers/randomIDGenerator');
var bcrypt = require("bcryptjs");
const db = require("../models");

const User = db.users;

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    user_id: randomID.generateRandomId(),
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(() => {
        res.send({ message: "User was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
        console.log(user);
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.user_id }, process.env.SECRET, {
        expiresIn: 86400 // 24 hours
      });

      // Put token in cookie
      res.cookie('token', token, {expire: new Date() + 9999});
        

    res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token,
          message: "Login Successful!"
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};