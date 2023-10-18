import { Router } from "express";
import { CreateController } from "../associate/create"
import { ListAssociatesController } from "../associate/list-associates"
import { DeleteAssociateController } from "../associate/delete";
import { ListAssociateController } from "../associate/list-associate";
import { CreateAddressController } from "../associate-address/create-address";
import { ListAssociateAddressController } from "../associate-address/list-associate-address";
import { DeleteAssociateAddressController } from "../associate-address/delete-address";

const associateRoutes = Router();

const createController = new CreateController();
const listAssociatesController = new ListAssociatesController();
const listAssociateController = new ListAssociateController();
const deleteAssociateController = new DeleteAssociateController();

const createAddressController = new CreateAddressController();
const listAssociateAddressController = new ListAssociateAddressController();
const deleteAssociateAddressController = new DeleteAssociateAddressController();


associateRoutes.post("/associate/create", createController.handler);
associateRoutes.get("/list/associates", listAssociatesController.handler);
associateRoutes.get("/list/associate/:id", listAssociateController.handler);
associateRoutes.put("/associate/update/:id", listAssociateController.handler);
associateRoutes.delete("/associate/delete/:id", deleteAssociateController.handler);

associateRoutes.post("/associate/address/create", createAddressController.handler);
associateRoutes.get("/associate/address/list", listAssociateAddressController.handler);
associateRoutes.delete("/associate/address/delete", deleteAssociateAddressController.handler);

export { associateRoutes };