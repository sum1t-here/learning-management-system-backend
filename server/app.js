import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
config();
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to get query params

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(cookieParser());

// user routes
app.use('/api/v1/user', userRoutes);
// course routes
app.use('api/v1/courses', courseRoutes);

app.all('*', (req, res) => {
  res.status(200).json({
    error: 'Not Found',
    message: 'The requested resource does not exist.',
  });
});

app.use(errorMiddleware);

export default app;
