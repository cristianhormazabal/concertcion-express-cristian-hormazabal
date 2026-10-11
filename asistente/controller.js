
import { ObjectId } from "mongodb";
import { db } from "../common/db.js";

const coleccion = db.collection("asistentes");

// POST - Registrar un asistente
export async function handleInsertAsistenteRequest(req, res) {
    try {
        const { idEvento, nombre, edad } = req.body;

        if (!ObjectId.isValid(idEvento) ||
            typeof nombre !== "string" ||
            !Array.isArray(edad)) {
            return res.status(400).json({
                error: "Datos del asistente no válidos"
            });
        }

        const asistente = {
            idEvento: new ObjectId(idEvento),
            nombre,
            edad
        };

        const resultado = await coleccion.insertOne(asistente);

        return res.status(201).json({
            _id: resultado.insertedId,
            ...asistente
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error al registrar asistente"
        });
    }
}

// GET - Consultar todos los asistentes
export async function handleGetAsistentesRequest(req, res) {
    try {
        const asistentes = await coleccion.find({}).toArray();
        return res.status(200).json(asistentes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error al consultar asistentes"
        });
    }
}

// GET - Consultar asistentes por evento
export async function handleGetAsistentesByEventoIdRequest(req, res) {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                error: "Id del evento mal formado"
            });
        }

        const asistentes = await coleccion.find({
            idEvento: new ObjectId(id)
        }).toArray();

        return res.status(200).json(asistentes);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error al consultar asistentes por evento"
        });
    }
}
