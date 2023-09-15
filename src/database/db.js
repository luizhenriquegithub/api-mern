import mongoose from "mongoose";

const connectDataBase = () => {
  console.log("wait connectiong to the database !!");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.46ai594.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected..."))
    .catch((error) => console.log(error));
};

export default connectDataBase;
