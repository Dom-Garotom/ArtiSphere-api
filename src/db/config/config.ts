import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

if (!PGHOST || !PGDATABASE || !PGUSER || !PGPASSWORD) {
    console.error("Por favor, defina as variáveis de ambiente corretamente.");
    process.exit(1); 
}

export const dataBase = new Sequelize(
    PGDATABASE,   
    PGUSER,       
    PGPASSWORD,   
    {
        dialect: "postgres",
        host: PGHOST,  
        port: 5432,
        dialectOptions: {
            ssl: {
                require: true,  
                rejectUnauthorized: false,  
            },
        },
    }
);
