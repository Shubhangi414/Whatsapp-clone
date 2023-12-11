import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
    const username = encodeURIComponent(process.env.MONGODB_USERNAME);
    const password = encodeURIComponent(process.env.MONGODB_PASSWORD);

    const URL = `mongodb://${username}:${password}@ac-dvncihh-shard-00-00.hsa78rl.mongodb.net:27017,ac-dvncihh-shard-00-01.hsa78rl.mongodb.net:27017,ac-dvncihh-shard-00-02.hsa78rl.mongodb.net:27017/?ssl=true&replicaSet=atlas-nwg18a-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL);
        console.log("Connected to Database successfully");
        }
    catch (error)
    {
        console.log("Error while connecting with database ", error.message);
    }
};

export default Connection;
