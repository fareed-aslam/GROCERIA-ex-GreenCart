import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export let isConnected = false;

export const connectDb = async () => {
  try {
    const connnectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    isConnected = true;
    console.log(
      `MONGODB connected || DB Host is ${connnectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB error", error);
    process.exit(1);
  }
};
