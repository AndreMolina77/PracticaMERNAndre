import express from "express";

import clientesRoutes from "./src/routes/clientes";
import empleadosRoutes from "./src/routes/empleados"
import sucursalesRoutes from "./src/routes/sucursales"

const app = express;

app.use(express.json());

app.use("/api/clientes"), clientesRoutes;
app.use("/api/empleados"), empleadosRoutes;
app.use("/api/sucursales"), sucursalesRoutes;   

export default app;