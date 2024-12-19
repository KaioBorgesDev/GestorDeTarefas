import { Task } from "src/entitie/Task";
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";
import ListTask from "src/usecases/ListTask";

const listTask = new ListTask(new TaskRepositoryImp());

const listTaskController = async (req,res) =>{
    try {
        const task: Task[] = await listTask.execute();
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send("Erro ao criar a task " + error.message);
    }
}
module.exports = listTaskController;