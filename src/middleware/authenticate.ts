import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/token";
import { JwtPayload } from "jsonwebtoken";
interface CustomRequest extends Request {
  user?: JwtPayload | string;
}
export function authenticate(req: CustomRequest, res: Response, next: NextFunction):void {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      res.status(401).json({ error: 'Access denied. No token provided.' });
    } else {
      try {
        const decoded = verifyToken(token as string);
        req.user = decoded;
        next();
      } catch (error) {
        res.status(400).json({ error: 'Invalid token.' });
      }
    }

  }