
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true 
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const mongoose = require("mongoose");

const mongoUrl = "mongodb://127.0.0.1:27017/ieye";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error("Error connecting to mongodb", err));

const hangoutRoutes = require("./routes/hangoutRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");

app.use("/hangout", hangoutRoutes);
app.use("/user", userRoutes);
app.use("/event", eventRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
