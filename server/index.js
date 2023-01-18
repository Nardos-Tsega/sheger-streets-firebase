import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Nardos:Nardos123@cluster0.r3eobeg.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`server is running on ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
