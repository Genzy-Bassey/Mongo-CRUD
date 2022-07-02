const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    timeStamp: {
        type: Number,
        default: 0,
    },
});

const User =mongoose.model("User", userSchema);
module.exports = User;