import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

mongoose.set('strictQuery', false);

const connectionToDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    if (connection) {
      console.log(`Database connected at ${process.env.MONGO_URI}`);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectionToDb;
