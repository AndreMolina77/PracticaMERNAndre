import express from "express";

const router = express.Router();
import clientesController from "../controllers/clientesController.js";

router
.route("/")
.get(clientesController.getClientes)
.post(clientesController.createClientes);

router
.route("/:id")
.get(clientesController.getCliente)
.put(clientesController.updateClientes)
.delete(clientesController.de);

export default router;