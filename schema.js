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
    name: {
      type: String,
      minlength: [3, "Too short!"],
      required: [true, "Name Can't be empty"]
    },
    Number_of_citizens: {
      type: [Number, "Number_of_Citizens It should be a number"],
      required: [true, "Number_of_Citizens Can't be empty"]
    },
    Name_of_leader: {
      type: String,
      required: [true, "Name_of_Leader Can't be empty"],
      minlength: [3, "Too short!"]
    },
    }
  );
  
export const User = mongoose.model('User', userSchema);
export const Village = mongoose.model('Village', villageSchema);
  