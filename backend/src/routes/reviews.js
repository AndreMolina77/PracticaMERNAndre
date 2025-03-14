import express from "express";
import reviewsController from "/..controllers/reviewsController.js";

const router = express.Router();

router
.route("/")
.get()
.post();

router
.route("/:id")
.get()
.put()
.delete()