import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("La variable MONGODB_URI no está configurada");
}

const client = new MongoClient(uri);

export async function connectDB() {
    await client.connect();
    await client.db("concertcion").command({ ping: 1 });
    console.log("Conexión exitosa con MongoDB Atlas");
    return client;
}

export const db = client.db("concertcion");
