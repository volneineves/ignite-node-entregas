import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/useCases/AuthenticateClientController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/authenticate", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);

export { routes };
