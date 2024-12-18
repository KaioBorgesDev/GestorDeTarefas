const express = require("express");
import TaskRepositoryImp from "./infra/services/TaskRepostoryImp";
import { Task } from "./entitie/Task";
import ListTask from "./usecases/ListTask";
import ListByStatus from "./usecases/ListByStatus";

const { openTaskController } = require("./adapters/controller/tasks/index");
const connectDB = require("./infra/setting/connectDB");
const listTask = new ListTask(new TaskRepositoryImp());
const listTaskByStatus = new ListByStatus(new TaskRepositoryImp());
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", openTaskController);

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
        const status: "Pendente" | "Concluída" = req.params.status;
        const task: Task[] = await listTaskByStatus.execute(status);
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send("Erro ao criar a task" + error);
    }
});

app.listen(5002);

module.exports = app;
