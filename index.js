import express from "express";
import cors from "cors";
import { connectDB } from "./common/db.js";
import asistenteRoutes from "./asistente/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", asistenteRoutes);

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Servidor Express iniciado en puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar servidor:", error.message);
        process.exit(1);
    }
}

iniciarServidor();
