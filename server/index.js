require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// import the warehouse routes file
const plantsRoutes = require("./routes/plants-routes");
const usersRoutes = require("./routes/users-routes");

const { PORT } = process.env;
app.use(express.json());
app.use(cors());

// use warehouse routes
app.use("/api", plantsRoutes);
app.use("/", usersRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on ${PORT}🚀`);
});
