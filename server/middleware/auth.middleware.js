import jwt from 'jsonwebtoken';
import AppError from '../utils/error.utils.js';

const isLoggedIn = async (req, res, next) => {
  try {
    // extracting token from the cookies
    const { token } = req.cookies;

    // If no token send unauthorized message
    if (!token) {
      return next(new AppError('Unauthorized, please login to continue', 401));
    }

    // Decoding the token using jwt package verify method
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // If no decode send the message unauthorized
    if (!decoded) {
      return next(new AppError('Unauthorized, please login to continue', 401));
    }

    // If all good store the id in req object, here we are modifying the request object and adding a custom field user in it
    req.user = decoded;

    // Do not forget to call the next otherwise the flow of execution will not be passed further
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Handle expired token error
      return next(new AppError('Token has expired', 401));
    } else {
      // Handle other JWT verification errors
      return next(new AppError('Unauthorized, please login to continue', 401));
    }
  }
};

export { isLoggedIn };
