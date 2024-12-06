import  express  from 'express';
import { middlewareRegisterUser } from '../middleware/registerUser';
import { loginUser, registerUser } from '../controlers/authControlers';
import { middlewareLoginUser } from '../middleware/loginUser';
import { middlewareVerificarToken } from '../middleware/verifyToken';

const RoutesAuth = express.Router();

RoutesAuth.post( "/register" , middlewareRegisterUser , registerUser);
RoutesAuth.post( "/login" , middlewareLoginUser , loginUser);

export default RoutesAuth;