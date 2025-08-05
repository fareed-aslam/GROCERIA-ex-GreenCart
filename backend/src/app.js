import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
// import { configureCors } from "./config/corsConfig.js";
import cors from "cors";
export const app = express();

const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
// app.use(configureCors());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// routes import
import userRouter from "./routes/user.route.js";
import sellerRouter from "./routes/seller.route.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
import addressRouter from "./routes/address.route.js";
import orderRouter from "./routes/order.route.js";
import { stripeWebhook } from "./controllers/order.controller.js";

// app.use("/", (req, res) => {
//   res.send("fareed");
// });

app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhook);
