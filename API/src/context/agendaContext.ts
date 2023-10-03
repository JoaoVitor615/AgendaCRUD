import { DataSource } from "typeorm"

const db = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306, //Inserir porta de conexão com o mysql
    username: "root", //Inserir username
    password: "", //Inserir senha
    database: "agenda",
    entities: ["src/models/entities/*.ts"],
    logging: true,
    synchronize: false,
})

export default db;