import express from 'express';
import cors from "cors";
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';

const app = express();

app.use(cors()); // enabling CORS for all routes
app.use(express.json()); // parsing incoming JSON requests

const PORT = 5000;

app.get("/", (req,res) =>{
  res.send("This is main page ok server is running");
});

app.get("/test", (req,res) =>{
  res.send("This is the test page");
});

app.use("/auth", authRoutes); // mounting the authRoutes on the /auth path

const startServer = async () =>{
  await connectDB(); // connecting to the database before starting the server

  app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer(); // starting the server