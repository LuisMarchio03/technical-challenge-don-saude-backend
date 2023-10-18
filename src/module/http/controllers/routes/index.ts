import { Router } from "express";
import { CreateController } from "../create"
import { ListAssociatesController } from "../list-associates"
import { ListAssociateController } from "../list-associate";

const associateRoutes = Router();

const createController = new CreateController();
const listAssociatesController = new ListAssociatesController();
const listAssociateController = new ListAssociateController();

associateRoutes.post("/associate/create", createController.handler);
associateRoutes.get("/list/associates", listAssociatesController.handler);
associateRoutes.get("/list/associate/:id", listAssociateController.handler);

export { associateRoutes };