import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Release } from "./entity/Release"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "apits",
    synchronize: true,
    logging: false,
    entities: [User, Release],
    migrations: [],
    subscribers: [],
})
