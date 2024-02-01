import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Quant",
    })
    .then(() => {
      console.log("Db Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
