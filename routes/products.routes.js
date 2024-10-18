import express from "express";
import { validationProductMidd } from '../middlewares/index.js';
import { createProducstController, getAllProducstsController,
         getByIdProducstController,
         updateByIdProducstcontroller,
         deleteByIdProducstController } from "../controllers/index.js";


export const productsRouter = express.Router()


//GET ALL
productsRouter.get("/", getAllProducstsController)

//GET BY ID
productsRouter.get("/:id", getByIdProducstController)

//CREATE
productsRouter.post("/", validationProductMidd, createProducstController)

//UPDATE BY ID
productsRouter.put("/:id", updateByIdProducstcontroller)

//DELETE BY ID
productsRouter.delete("/:id", deleteByIdProducstController)




// export const productsRouter = 
