import express from "express";
import { home,open,direct,limited } from "../controllers/posts.js";
const router=express.Router()
router.get('/',home)
router.get('/open',open)
router.get('/direct',direct)
router.get('/limited',limited)
export default router