import mongoose from "mongoose";
export const connectDb = () => {
    mongoose.connect('mongodb+srv://afrigames123:7X3DL7Rxm13OUNNx@cluster0.s8us6bg.mongodb.net/ClassRoom?retryWrites=true&w=majority&appName=Cluster0', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    })

    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));
}
