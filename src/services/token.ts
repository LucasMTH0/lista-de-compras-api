var jwt = require('jsonwebtoken');
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

export const generateToken = (userId: string) => {
    return jwt.sign({userId}, JWT_SECRET);
};
  
export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
  