import monogoose from 'mongoose';
import { string } from 'zod';

let isConnected = false; //check if mongoose is connected

const connectToDB = async () => {
  monogoose.set('strictQuery', true); // Prevent unknown fields query

  try {
    await monogoose.connect(process.env.MONGODB_URL || '');

    isConnected = true;
    console.log('connected to mongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
