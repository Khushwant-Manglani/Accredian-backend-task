const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const referralRoutes = require("./routes/referral.routes.js");
const errorHandler = require("./middlewares/error.middleware.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use("/api", referralRoutes);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
