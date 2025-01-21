import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import 'dotenv/config';

// App confing
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
// This line says, "Yes, it's okay for other websites to talk to mine."
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API is working");
})

app.listen(port, () => {
    console.log(`Server Listening on port http://localhost:${port}`);
})

// mongodb+srv://yogeshleo420:1234567yy@cluster0.dfnbrsn.mongodb.net/?
