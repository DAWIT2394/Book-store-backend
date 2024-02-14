const mongoose = require("mongoose");
const db =
"mongodb+srv://davewinner2394:win2394@cluster0.lzce7th.mongodb.net/Book1?retryWrites=true&w=majority"
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB