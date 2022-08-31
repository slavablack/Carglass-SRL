import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
const url = process.env.DB_LOCALCONNECTION;

const infoSchema = new mongoose.Schema({
  text: String,
});
const Info = mongoose.model("Info", infoSchema);

// app.get("/", (req, res) => {
//   res.json({ message: "welcome to our page!" });
// });
const getInfos = async () => {
  return await Info.find().exec();
};
app.get("/", async (req, res) => {
  try {
    const data = await getInfos();
    res.json(data);
  } catch (err) {
    res.json({ err: err.message });
  }
});

app.post("/newInfo", async (req, res) => {
  try {
    const newInfo = new Info({
      ...req.body,
    });
    const tempInfo = await newInfo.save();
    // console.log(newUser);
    res.json(newInfo);
  } catch (err) {
    res.json({ err: err.message });
  }
});
// app.listen(process.env.PORT, () => {
//   console.log("app listen to port " + process.env.PORT);
// });

mongoose.connect(url).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
