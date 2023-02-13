import mongoose from "mongoose";

const connectMongodb = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected!!!");
  } catch (error) {
    console.log("connect mongodb =>", error);
  }
};

export default connectMongodb;
