import { Task } from "src/entitie/Task";
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";
import EditTask from "src/usecases/EditTask";

const updateTaskController = async (req, res) => {
    const task: Task = req.body;
    const editTask = new EditTask(new TaskRepositoryImp());

    try {
        await editTask.execute(task);
        res.status(200).json({ mensagem: "atualizado com sucesso!" });
    } catch (error) {
        res.status(400).json({ mensagem: error });
    }
};
module.exports = updateTaskController;
