import express, { json } from "express";
import cors from 'cors'
import * as dotenv from 'dotenv'
import { VacationRoute } from "./6-controllers/vacation-controller";
import { UserRoute } from "./6-controllers/auth-controller";
import { FancierRoute } from "./6-controllers/fancier-controller";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';

dotenv.config();

const server = express();


server.use(cors())
server.use(bodyParser.json())

server.use(json());
server.use(cors());

server.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, 
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));


server.use(express.static('../1-assets/vacImages'))//works



server.use('/api',VacationRoute)
server.use('/api', UserRoute)
server.use('/api', FancierRoute)

// server.listen(process.env.PORT, () => {
//     console.log(`listening on port ${config.port}`);
// })
server.listen(3001, () => {
    console.log('Listening on port 3001...');
})
