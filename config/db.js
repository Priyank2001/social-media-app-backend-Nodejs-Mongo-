import { set, connect } from 'mongoose';

const connectDB = async () => {
  try {
    set('strictQuery', true);
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;