import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-jn6cknu-shard-00-00.gh3fppa.mongodb.net:27017,ac-jn6cknu-shard-00-01.gh3fppa.mongodb.net:27017,ac-jn6cknu-shard-00-02.gh3fppa.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-u1veqy-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connection successful");
  } catch (error) {
    console.log("Error while connecting ", error.message);
  }
};

export default Connection;
