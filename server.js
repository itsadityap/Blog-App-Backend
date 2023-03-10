require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.SERVER_PORT || 3000;

// Default Middlewares
app.use(express.json());
app.use(cors());

//Database Connection
const db = require("./models");
db.sequelize.sync({ force: false}).then(() => {
    console.log("Drop and re-sync db.");
    }); 

// Importing Routes
const authRoutes = require('./routes/auth');
const getUserByIDRoutes = require('./routes/getUserByID');
const postRoutes = require('./routes/post');
const likeRoutes = require('./routes/likePost');
const unlikeRoutes = require('./routes/unlikePost');
const commentRoutes = require('./routes/comment');


// Implementing Routes.
app.use('/api/', authRoutes)
app.use('/api/', getUserByIDRoutes)
app.use('/api/', postRoutes)
app.use('/api/', likeRoutes)
app.use('/api/', unlikeRoutes)
app.use('/api/', commentRoutes)
app.get('/', (req, res) => {
    res.status(200).json({message:"Hello World from Blog API servers, Everything is working fine."});
});

// Starting the server.
app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
});