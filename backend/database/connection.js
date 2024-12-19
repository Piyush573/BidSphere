import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect("mongodb+srv://bhardwajpiyush05072003:qrMfgHqYW24DUagj@cluster0.yx45o.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "MERN_AUCTION_PLATFORM",
    })
    .then(() => {
      console.log("Connected to database.");
    }) 
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
