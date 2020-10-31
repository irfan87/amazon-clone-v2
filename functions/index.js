const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// API

// App config

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
	res.status(200).send("hello there!");
});

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	console.log("Payment Request Received:", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "myr",
	});

	res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-v2-c67f8/us-central1/api
