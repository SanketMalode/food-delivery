import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import FoodRouter from './routes/FoodRoute.js';
import { ConnectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

dotenv.config(); // ✅ Load .env variables

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/food', FoodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => res.status(200).send("This is the homepage"));

ConnectDB().then(() => {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
