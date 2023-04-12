// import express from "express";
// // const express = required("express")
// import routerProduct from "./routes/product.js";
// import dotenv from "dotenv";
// dotenv.config();  
// const app = express();

// // your beautiful code...

// if (import.meta.env.PROD)
//   app.listen(3000);

// export const viteNodeApp = app;
// app.use(express.json());

// app.use("/api", routerProduct);

//localhost: 8000 / api / products;
// app.get("/api/products", async (req, res) => {
//     const { data: products } = await axios.get("http://localhost:3001/products");
//     res.status(200).json(products);
// });
// app.get("/api/products/:id", async (req, res) => {
//     const { data: product } = await axios.get(`http://localhost:3001/products/${req.params.id}`);
//     res.status(200).json({
//         message: "Product found",
//         data: product,
//     });
// });
// // client -> server nodes
// app.post("/api/products", async (req, res) => {
//     // gửi request từ server nodes -> json-server
//     const { data: product } = await axios.post("http://localhost:3001/products", req.body);
//     res.status(201).json({
//         message: "Product created",
//         data: product,
//     });
// });

// app.delete("/api/products/:id", async (req, res) => {
//     await axios.delete(`http://localhost:3001/products/${req.params.id}`);
//     res.status(200).json({
//         message: "Sản phẩm đã được xóa thành công",
//     });
// });
// app.patch("/api/products/:id", async (req, res) => {
//     const { data: product } = await axios.patch(
//         `http://localhost:3001/products/${req.params.id}`,
//         req.body
//     );
//     res.status(200).json({
//         message: "Sản phẩm đã được cập nhật thành công",
//         data: product,
//     });
// });

// app.listen(process.env.PORT, () => {
//   console.log("Server is running on port 8080");
// });


// install axios.
// install concurrently
// cau hinh lai package.json
// them thu muc controllers/product.js
// them thu muc routes/product.js

/**
 * Step 1: install json-server
 * Step 2: install concurrently
 * Step 3: install axios
 * Step 4: edit package.json
 * Step 5: setting "type": "module" in package.json
 * Step 6: Add method getAll, getDetail, post, put, delete
 */

/**
 * 1. Tao folder
 * 2. Tao file app.js
 * 3. npm init
 * 4. install các thư viện: express, nodemon, concurrently, dotenv, axios, json-sever
 * 5. Import Express và cấu hình trong file app.js
 * 6. Tạo routes/product.js và cấu hình các routes tại đây.
 * 7. Tạo controllers/product.js và cấu hình các controllers tại đây.
 *
 */

/**
 * Cấu hình joi:
 * 1. npm i joi
 * 2. import Joi from "joi" (controllers)
 * 3.
 */

import express from "express";
// import routerProduct from "./routes/product.js";
// import routerAuth from "./routes/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import router from "./routes/index.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())
mongoose.connect(`${process.env.API_DB}`)

// app.use("/api", routerProduct);
// app.use("/api", routerAuth);

app.use("/api",router)
export const viteNodeApp = app;
/**
 * Step 1: install json-server
 * Step 2: install concurrently
 * Step 3: install axios
 * Step 4: edit package.json
 * Step 5: setting "type": "module" in package.json
 * Step 6: Add method getAll, getDetail, post, put, delete
 */

/**
 * 1. Tao folder
 * 2. Tao file app.js
 * 3. npm init
 * 4. install các thư viện: express, nodemon, concurrently, dotenv, axios, json-sever
 * 5. Import Express và cấu hình trong file app.js
 * 6. Tạo routes/product.js và cấu hình các routes tại đây.
 * 7. Tạo controllers/product.js và cấu hình các controllers tại đây.
 *
 */
