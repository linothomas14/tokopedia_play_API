const connectDB = require("./config/mongodb.js");
const express = require('express')
const videosRoutes = require('./routes/video.js')


const app = express();


// Parse incoming requests data
app.use(express.json());

app.use("/", videosRoutes);

// Connect to MongoDB
connectDB();

app.listen("3000", () => {
    console.log('Server is running on port 3000');
});
