import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI){
    throw new Error("MONGODB URI is not defined in .env.local");
}

async function connectDB(){
    if(mongoose.connection.readyState === 1){
        // already connected 
        return
    }
    
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected!")
}

export default connectDB;