import TaskRepository from "src/adapters/repository/TaskRepository";
import { Task } from "src/entitie/Task";
import TaskModel from "../model/TaskModel";

export default class TaskRepositoryImp implements TaskRepository {
    async get(uuid_task: String): Promise<Task | null> {
        return await TaskModel.findOne({ uuid: uuid_task });
    }
    async save(task: Task): Promise<void> {
        task.validateSave();
        await TaskModel.create(task);
    }
    async update(task: Task): Promise<void> {
        task.validateUpdate();

        await TaskModel.findOneAndUpdate(
            { uuid: task.uuid },
            { $set: task },
            { new: false }
        );
    }
    async remove(uuid_task: String): Promise<void> {
        await TaskModel.findOneAndDelete({ uuid: uuid_task });
    }
    async getAll(): Promise<Task[]> {
        const task: Task[] = await TaskModel.find({});
        return task;
    }
    async listByStatus(status: "Pendente" | "Concluída"): Promise<Task[]> {
        const task: Task[] = await TaskModel.find({ status: status });
        return task;
    }
}
