
import { ObjectId } from "mongodb";

export const Asistente = {
    _id: ObjectId,
    idEvento: ObjectId,
    nombre: String,
    edad: Array
};
