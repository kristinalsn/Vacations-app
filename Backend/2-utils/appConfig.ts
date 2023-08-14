import * as dotenv from 'dotenv'
dotenv.config();


interface Config {
    imagesFolderPath: string;
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
    imagesFolderPath: 'http://localhost:3001/api/vacations/images'
  };

  
  export default config;