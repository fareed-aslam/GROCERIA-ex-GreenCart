import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDb = async () => {
  try {
    const connnectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `MONGODB connected || DB Host is ${connnectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB erro", error);
    process.exit(1);
  }
};
