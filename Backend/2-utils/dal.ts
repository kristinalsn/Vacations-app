import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2/promise';

interface Config {
  port: number;
  db: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
}

const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3306,
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'literatura2016',
    database: process.env.DB_NAME || 'vacationsdb',
  },
};

export default config;

const pool =  mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.port,
  });

export function execute<T>(query: string, params?: any[]) {
    return pool.execute<T & RowDataPacket[]>(query, params);
}

