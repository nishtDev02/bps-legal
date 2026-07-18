import mongoose from "mongoose";

const {Schema} = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    locale: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Adv. Bhanu Pratap Sagar"
    }
}, {timestamps: true})


export default mongoose.models.Blog || mongoose.model("Blog", blogSchema)