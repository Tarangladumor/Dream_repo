import express from "express";
import { getAllProductsOfUser, getShopByCity } from "../controllers/Individual.js";
import {auth, isIndividual} from "../middleware/auth.js"
import { createProduct, deleteProduct, updateProduct } from "../controllers/Product.js";
import { allInterestedProductsOfUser, getAllInterestedShopkeepers } from "../controllers/interestedProduct.js";

const router = express.Router();

router.get("/getshopbycity",auth,isIndividual,getShopByCity)
router.post("/createproduct",auth,isIndividual,createProduct)
router.put("/updateproduct",auth,isIndividual,updateProduct) //pending
router.delete("/deleteproduct",auth,isIndividual,deleteProduct)
router.get("/getallproductsofuser",auth,isIndividual,getAllProductsOfUser)
router.get("/allinterestedshopekeepers",auth,isIndividual,getAllInterestedShopkeepers)
router.get("/allinterestedproductsofuser",auth,isIndividual,allInterestedProductsOfUser)

export default router;