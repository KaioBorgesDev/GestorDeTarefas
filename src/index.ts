const express = require("express");

const {
    openTaskController,
    listTaskController,
    listTaskByStatusController,
    closeTaskController,
    removeTaskController
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
app.delete("/remove/:uuid", removeTaskController)


app.listen(5002);

module.exports = app;
