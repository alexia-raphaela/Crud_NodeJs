import express from "express";
import { getUsuarios, insertUsuarios, deleteUsuarios, updateUsuarios } from "../controller/index.js";
const router = express.Router();

router.get("/users", getUsuarios);
router.post("/insertUser", insertUsuarios);
router.delete("/deleteUser/:id", deleteUsuarios);
router.put("/:id", updateUsuarios);

export default router;