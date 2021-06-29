import express from "express"
import mongoose from "mongoose"
import Destinations from "./Tourismdb.js";
import Cors  from "cors";
// var express = require("express");
// var mongoose = require("mongoose");


// var Cards = require("./dbCards");

// App Config

const app = express();
const port = process.env.PORT || 8001;
 const connection_url =
   "mongodb+srv://rajveer30:raghukul27@cluster0.k8uhu.mongodb.net/tourismdb?retryWrites=true&w=majority";
// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
 mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// API Endpoints

app.get("/", (req, res) => res.status(200).send("HELLO"));
app.post("/destinations", (req, res) => {
  const dbCard = req.body;
Destinations.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });

//Jodhpur db
// Jodhpur.create(dbCard, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
  app.get("/destinations", (req, res) => {
    Destinations.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

 
});

// // Listener

app.listen(port, () => console.log(`listening on localhost:${port}`));
