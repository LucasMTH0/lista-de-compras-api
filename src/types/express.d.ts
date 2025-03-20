import { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
  interface Request {
    user?: JwtPayload | string; // Adiciona a propriedade `user` ao objeto `Request`
  }
}