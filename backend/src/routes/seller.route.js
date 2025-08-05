import express from "express";
import {
  sellerLogoutHandler,
  isSellerAuth,
  sellerLoginHandler,
} from "../controllers/seller.controller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();

router.route("/login").post(sellerLoginHandler);
router.route("/is-auth").get(authSeller, isSellerAuth);
router.route("/logout").get(sellerLogoutHandler);

export default router;
