import mongoose from './connection';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String, 
  email: String,
  password: String ,
  date: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', userSchema);

