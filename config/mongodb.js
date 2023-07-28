const mongoose = require('mongoose');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

const connectDB = async () => {
    try {
        await mongoose.connect(mongoString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;