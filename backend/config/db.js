import mongoose from "mongoose";

export const ConnectDB = async (req, res) => {
  try {
    await mongoose.connect(
      `mongodb+srv://ajsifcrwy:fpJPVz6DUhqz3i26@cluster0.wtckoar.mongodb.net/food-delivery`
    );
    console.log(`MongoDb connection successfull`);
  } catch (err) {
    console.log(err);
  }
};
