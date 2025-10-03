import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Root endpoint called!");
  res.send({ message: "Hello world!!" });
});

app.listen(3000, () => {
  console.log("Listenting on port http://localhost:3000");
});
