import express from "express"
import { getCaterers, addCaterer } from "../controllers/catererController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCaterers);

// admin-only route do add staff
router.post("/", protect, adminOnly, addCaterer);

export default router;
