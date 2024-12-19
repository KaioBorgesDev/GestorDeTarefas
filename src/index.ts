const express = require("express");

const {
    openTaskController,
    listTaskController,
    listTaskByStatusController,
    closeTaskController,
} = require("./adapters/controller/tasks/index");
const connectDB = require("./infra/setting/connectDB");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", openTaskController);
app.get("/listar", listTaskController);
app.get("/listar/:status", listTaskByStatusController);
app.post("/fechar/:uuid", closeTaskController)

app.listen(5002);

module.exports = app;
