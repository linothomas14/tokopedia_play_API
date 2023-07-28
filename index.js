const connectDB = require("./config/mongodb.js");
const express = require('express')
const videosRoutes = require('./routes/video.js')
const productsRoutes = require('./routes/product.js')
const commentsRoutes = require('./routes/comment.js')

const app = express();


// Parse incoming requests data
app.use(express.json());

app.use("/", videosRoutes);
app.use("/", productsRoutes);
app.use("/", commentsRoutes);

// Connect to MongoDB
connectDB();

app.listen("3000", () => {
    console.log('Server is running on port 3000');
});
