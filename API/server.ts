import express, { urlencoded } from "express";
import db from "./src/context/agendaContext";
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from "./src/controller";

dotenv.config()

db
.initialize()
.then(() => {
  console.log("Banco de dados inicializado!");
})
.catch((err) => {
  console.log(`Erro ao se conectar: ${err}`);
});

const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(port, () => {
    console.log('🚀 servidor rodando na porta %d', port);
});
