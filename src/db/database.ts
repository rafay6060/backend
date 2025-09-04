import mongoose from "mongoose";


const connectDb = async () => {
    try {
        // Try Atlas first, fallback to local if needed
        const atlasUrl = "mongodb+srv://smctrader855:ao1nSxtB347DnnXS@cluster0.tewsz.mongodb.net/getminedb?retryWrites=true&w=majority&appName=Cluster0";
        const localUrl = "mongodb://localhost:27017/getminedb";
        
        await mongoose.connect(atlasUrl, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            bufferCommands: false,
            maxPoolSize: 10,
            minPoolSize: 1
        });
        console.log("Database connect success (Atlas)");
    } catch (error) {
        console.error("Atlas connection failed, trying local MongoDB...");
        try {
            await mongoose.connect("mongodb://localhost:27017/getminedb");
            console.log("Database connect success (Local)");
        } catch (localError) {
            console.error("Database connection failed:", localError);
            process.exit(1);
        }
    }
}

export default connectDb;