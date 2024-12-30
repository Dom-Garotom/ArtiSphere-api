import  express  from 'express'
import { getMostPopular, getMostRecent, getMostRelevant } from '../controlers/filterControlers';

const RouterFilter = express.Router();

RouterFilter.get("/mostPopular" , getMostPopular)
RouterFilter.get("/mostRelevant" , getMostRelevant)
RouterFilter.get("/mostRecent" , getMostRecent)

export default RouterFilter;  