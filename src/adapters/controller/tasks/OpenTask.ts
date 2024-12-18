import { OpenTaskDTO } from "src/adapters/dto/OpenTaskDTO";
import { Task } from "src/entitie/Task";
import TaskRepositoryImp from "src/infra/services/TaskRepostoryImp";
import OpenTask from "src/usecases/OpenTask";


const openTaskController = async (req, res) => {
    const task: Task = req.body;
    const openTask = new OpenTask(new TaskRepositoryImp);

    try {
        openTask.execute(task);
    } catch (err) {
        console.log(err);
    }
};

