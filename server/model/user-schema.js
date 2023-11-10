import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    min: 10,
    max: 10,
    trim: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
