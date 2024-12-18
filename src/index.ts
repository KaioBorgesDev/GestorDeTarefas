const express = require("express");
import crypto from "node:crypto";
import TaskRepositoryImp from "./infra/services/TaskRepostoryImp";
import OpenTask from "./usecases/OpenTask";
import { Task } from "./entitie/Task";
import ListTask from "./usecases/ListTask";
import ListByStatus from "./usecases/ListByStatus";
const connectDB = require("./infra/setting/connectDB");
const openTask = new OpenTask(new TaskRepositoryImp());
const listTask = new ListTask(new TaskRepositoryImp());
const listTaskByStatus = new ListByStatus(new TaskRepositoryImp());
const app = express();
connectDB();

app.post("/", async (req, res) => {
    try {
        const task = new Task(
            crypto.randomUUID(),
            "Arrumar a casa",
            "Hoje preciso arrumar",
            new Date(),
            "Pendente"
        );
        await openTask.execute(task);
        res.status(201).send("Task Criada com Sucesso");
    } catch (error) {
        res.status(400).send("Erro ao criar a task" + error);
    }
});

app.get("/listar", async (req, res) => {
    try {
        const task: Task[] = await listTask.execute();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send("Erro ao criar a task" + error);
    }
});
app.get("/listar/:status", async (req, res) => {
    
    try {
        const status : 'Pendente' | 'Concluída' = req.params.status;
        const task: Task[] = await listTaskByStatus.execute(status);
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send("Erro ao criar a task" + error);
    }
});

app.listen(5002);
app.use(express.json);
app.use(express.urlencoded({ extend: true }));

module.exports = app;
