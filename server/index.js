const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require("./config/db");
const PORT = 8080;

connectDb();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/auth", userRoutes); 

app.get("/", (req, res,) => {
    res.send(`Srever is running`)
})
 
app.listen(PORT, () => {
  console.log(`Server is listing on port ${PORT}`)
})