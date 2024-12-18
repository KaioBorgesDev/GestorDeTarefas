const mongoose = require("mongoose");

const getConnectionByEnv = () => {
    if (process.env.NODE_ENV === "testing") return process.env.MONGO_URI_TEST;
    return process.env.MONGO_URI_PROD;
};
const connect = () => {
    mongoose.connect(getConnectionByEnv()).catch(console.error);
};

module.exports = connect;
