const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema enforces properties and property attributes for database
const userSchema = new Schema({
  googleId: String
});


mongoose.model('users', userSchema);