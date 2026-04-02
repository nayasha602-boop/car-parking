require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
    origin: "https://car-parking-theta.vercel.app",
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ✅ TEST ROUTE (IMPORTANT)
app.use(cors({
    origin: "https://car-parking-theta.vercel.app",
    methods: ["GET", "POST"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Backend is running ✅");
});

/* =====================
   ❌ DATABASE DISABLED (TEMP)
===================== */

/*
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT) || 3306
});

db.connect(err => {
    if (err) { console.error("❌ DB Error:", err); return; }
    console.log("✅ MySQL Connected!");
});
*/

/* =====================
   ❌ ALL DB ROUTES DISABLED
===================== */

/*
app.get("/slots", (req, res) => {});
app.post("/create-order", async (req, res) => {});
app.post("/verify-payment", (req, res) => {});
app.get("/verify/:ticketId", (req, res) => {});
*/

/* =====================
   RAZORPAY (SAFE)
===================== */

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// =====================
// SERVER START
// =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
