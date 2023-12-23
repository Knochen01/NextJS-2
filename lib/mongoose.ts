import mongoose from "mongoose";

let isConnectd: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MongoDb_url) return console.log("Missing MongoDB URL");

  if (isConnectd) return console.log("MongoDB is already Connectd");

  try {
    await mongoose.connect(process.env.MongoDb_url, {
      dbName: "Test123",
    });
    isConnectd = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
