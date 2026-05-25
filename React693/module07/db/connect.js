import mongoose from "mongoose"

mongoose.set('strictQuery', true)

const connectDB = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("Connected to MongoDB successfully...")
    } catch (err) {
        console.error("MongoDB connection error:", err.message)
        process.exit(1)
    }
}

export default connectDB
