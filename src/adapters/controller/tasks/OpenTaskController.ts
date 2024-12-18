import { Task } from "src/entitie/Task";
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";
import OpenTask from "src/usecases/OpenTask";

const OpenTaskController = async (req, res) => {
    const task: Task = req.body;
    const openTask = new OpenTask(new TaskRepositoryImp());

    try {
        await openTask.execute(task);
        res.status(201).json({ Mensagem: "Tarefa criada com sucesso!" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err });
    }
};

module.exports = OpenTaskController;
