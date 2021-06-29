import express from "express"
import mongoose from "mongoose"

import userRoute from "./UserRoute"
import cors from "cors"
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

mongoose
.connect("mongodb://localhost:8001/Tourismdb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.info("MongoDB connected successfully");
})
.catch(() => {
    console.error("Connection failed");
});

app.use(userRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
});