import mongoose from 'mongoose';

const dbClient = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default dbClient;
