const express = require("express");
const app = express();
const colors = require("colors")
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 8800
const connectDB = require("./config/db")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const reactionsRoute = require("./routes/reactions")
const notificationsRoute = require("./routes/notifications")
const commentsRoute = require("./routes/comments")
const saveRoute = require("./routes/save")
const cors = require('cors');
const fs = require("fs")
const bodyParser = require("body-parser");

//parsing a file to front end using asynchronous version (using fs module)
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8", "title", "categoryName", "reviewsCount", "imageUrls"))
//console.log(data)


dotenv.config();
connectDB();
      
   //middleware
   app.use(express.json());
   app.use(helmet());
   app.use(morgan("common"));

   app.use("/api/users", userRoute);
   app.use("/api/auth", authRoute);
   app.use("/api/reactions", reactionsRoute);
   app.use("/api/notifications", notificationsRoute);
   app.use("/api/comments", commentsRoute)
   app.use("/api/save", saveRoute)
   app.use("/data", async(req, res) =>{
    res.send(dataObj)
   })


app.listen(port, () => console.log(`server started on port ${port}`))

//enabling cors from all requests
app.use(cors());

//adding morgan to log HTTP requests
app.use(morgan('combined'));

//body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//home route that returns an object when fetched
app.get("./data", (req, res) => {
   res.setHeader('Content-type', 'application/json');

   res.end(
      JSON.stringify('./data')
   )
})












