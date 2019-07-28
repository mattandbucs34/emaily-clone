const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema enforces properties and property attributes for database
const userSchema = new Schema({
  googleId: String,
  credits: { 
    type: Number, 
    default: 0
  }
});


mongoose.model('users', userSchema);