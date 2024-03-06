const mongoose = require("mongoose");

let db;

async function movie() {
  if (db) {
    return db;
  }
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/movies", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connect.connection;
    return db;

  } catch (err) {
    console.log((err));
  }
}
module.exports = movie;
