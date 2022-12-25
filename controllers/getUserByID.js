const db = require("../models");
const User = db.users;

async function getUserByID(req, res) 
{
    const id = req.params.id;
    console.log(id);
    const user = await User.findByPk(id);

    if (user) 
    {
        res.status(200).json(user);
    } 
    else 
    {
        res.status(404).json({ message: "User not found!" });
    }
}

module.exports = {
    getUserByID
}