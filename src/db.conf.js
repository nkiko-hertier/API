import mongoose from "mongoose";
export const connectDb = (ConnString) => {
    mongoose.connect(ConnString, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    })

    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));
}
