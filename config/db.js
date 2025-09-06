const mangoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mangoose.connect(db);
    console.log('DB Connected');
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
