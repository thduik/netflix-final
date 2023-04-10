const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const path = require("path");
const redis = require('redis');

const addAdminSeed = require("./addAdminSeed");
dotenv.config();



const DIST_DIR = path.join(__dirname, "../client/dist");
app.use(express.static(DIST_DIR));

const redisPort = process.env.PORT || 6379;  // Replace with your redis port
const redisHost = "127.0.0.1";  // Replace with your redis host
const redisClient = redis.createClient({
    socket: {
      port: redisPort,
      host: redisHost,
    }
  });

// const redisClient = redis.createClient(6379)

redisClient.connect().catch((err)=>{
  console.log("redis err:", err)
})

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("MongoDB Connection Successfull")
      // addAdminSeed()
    }
    )
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use((req, res, next) => {
  console.log('receivedReq')
  console.log("protocol is: ", req.protocol)     // "https"
  console.log("hostname is: ", req.hostname)     // "example.com"
  console.log("path is: ", req.path)         // "/creatures"
  console.log("originalUrl is: ", req.originalUrl)  // "/creatures?filter=sharks"
  console.log("subdomains is: ", req.subdomains)   // "['ocean']"
  console.log()
  
  next()
})
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/movies", movieRoute);
// app.use("/api/lists", listRoute);

app.use("/api/auth", authRoute);
app.use("/users", userRoute);
app.use("/movies", movieRoute);
app.use("/lists", listRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});

