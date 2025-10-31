import express from "express"
import {
    getStaff,
    getStaffAdmin,
    addStaff,
    updateProfile,
} from "../controllers/staffController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public - anyone can view staff list
router.get("/", getStaff);

// admin-only route to add staff
router.post("/newmember", protect, adminOnly, addStaff);

// Admin - view all staff with addedBy metadata
router.get("/viewteam", protect, adminOnly, getStaffAdmin);

// Staff - update their own profile (cannot change name/role)
router.post("/self", protect, updateProfile);

export default router;
