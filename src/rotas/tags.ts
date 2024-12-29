import { createTags } from './../controlers/tagsControlers';
import  express  from 'express'
import { getTags } from '../controlers/tagsControlers';

const RoutesTags = express.Router();

RoutesTags.get("tags" , getTags)
RoutesTags.post("tags" , createTags)

export default RoutesTags;