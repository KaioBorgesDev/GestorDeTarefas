import { Task } from "src/entitie/Task";
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";
import GetTask from "src/usecases/GetTask";

const GetTaskController = async (req, res) => {
    const getTask = new GetTask(new TaskRepositoryImp());
    const uuid = req.params.uuid;
    try {
        const task: Task | null = await getTask.execute(uuid);
        if (task) res.status(200).json(task);
        else res.status(404).json({ mensagem: "não foi encontrado!" });
    } catch (error) {
        res.status(400).json({ erro: error });
    }
};

module.exports = GetTaskController;
