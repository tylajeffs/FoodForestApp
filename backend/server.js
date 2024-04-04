require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const forestRoutes = require("./routes/forests");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  //logs out requests coming in
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/forests", forestRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connect to database & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
