import mongoose from "mongoose";

const connectMongodb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI);
    console.log(response);
  } catch (error) {
    console.log("connect mongodb =>", error);
  }
};

module.exports = connectMongodb;
