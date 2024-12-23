const express = require("express");
const cors = require('cors')
const {
    openTaskController,
    listTaskController,
    listTaskByStatusController,
    closeTaskController,
    removeTaskController,
    updateTaskController,
    getTaskController,
} = require("./adapters/controller/tasks/index");
const connectDB = require("./infra/setting/connectDB");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
})

app.post("/", openTaskController);
app.get("/listar", listTaskController);
app.get("/listar/:status", listTaskByStatusController);
app.post("/fechar/:uuid", closeTaskController);
app.delete("/remove/:uuid", removeTaskController);
app.put("/atualizar", updateTaskController);
app.get("/:uuid", getTaskController);
app.listen(5002);

module.exports = app;
