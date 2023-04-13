import { Router } from "express"
import * as ProductController from "./Product.controller.js"


const ProductRouter = Router()

ProductRouter.get("/products", ProductController.all )
ProductRouter.get("/products/:id", ProductController.one )
ProductRouter.post("/products", ProductController.create )
ProductRouter.patch("/products/:id", ProductController.update )
ProductRouter.delete("/products/:id", ProductController.destroy )

export default ProductRouter