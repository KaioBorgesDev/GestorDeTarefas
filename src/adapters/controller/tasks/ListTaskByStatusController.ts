import { Task } from "src/entitie/Task";
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";
import ListByStatus from "src/usecases/ListByStatus";

const listTaskByStatusController = async (req, res) => {
    const listTaskByStatus = new ListByStatus(new TaskRepositoryImp());
    try {
        const status: "Pendente" | "Concluída" = req.params.status;
        const task: Task[] = await listTaskByStatus.execute(status);
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send("Erro ao criar a task" + error);
    }
}

module.exports = listTaskByStatusController;