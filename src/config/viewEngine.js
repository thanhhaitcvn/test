import express from "express";
let configViewEngine = () => {
    app.use(express.static("./src/puplic"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}
module.exports = configViewEngine;