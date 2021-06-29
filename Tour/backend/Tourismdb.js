import mongoose from "mongoose"

const destinationSchema = mongoose.Schema({
  name: String,
  imgURL: String,
  path: String,

});

export default mongoose.model("Destinations", destinationSchema);
