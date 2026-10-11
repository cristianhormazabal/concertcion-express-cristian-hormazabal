
import { Router } from "express";

import {
    handleInsertAsistenteRequest,
    handleGetAsistentesRequest,
    handleGetAsistentesByEventoIdRequest
} from "./controller.js";

const router = Router();

router.post(
    "/asistente",
    handleInsertAsistenteRequest
);

router.get(
    "/asistentes",
    handleGetAsistentesRequest
);

router.get(
    "/asistentes/evento/:id",
    handleGetAsistentesByEventoIdRequest
);

export default router;
