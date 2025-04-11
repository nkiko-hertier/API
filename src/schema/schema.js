import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  const villageSchema = new mongoose.Schema({
    name: String,
    Number_of_citizens: Number,
    number_of_leader: Number,
    }
  );
  
export const User = mongoose.model('User', userSchema);
export const Village = mongoose.model('Village', villageSchema);
  