import { Router } from "express";
import { CreateController } from "../create"

const associateRoutes = Router();

const createController = new CreateController();

associateRoutes.post("/associate/create", createController.handler);

export { associateRoutes };