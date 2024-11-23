import  express  from 'express';
import { middlewareRegisterUser } from '../middleware/registerUser';
import { registerUser } from '../controlers/authControlers';

const RoutesAuth = express.Router();

RoutesAuth.post( "/register" , middlewareRegisterUser , registerUser);

export default RoutesAuth;