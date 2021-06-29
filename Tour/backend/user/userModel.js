import mongoose from "mongoose";

const user = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model("User", user, "userinfo");
