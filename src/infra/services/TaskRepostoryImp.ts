import TaskRepository from "src/adapters/repository/TaskRepository";
import { Task } from "src/entitie/Task";
import TaskModel from "../model/TaskModel";
import { UUID } from "crypto";

export default class TaskRepositoryImp implements TaskRepository {
    close(uuid_task: UUID): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async get(uuid_task: UUID): Promise<Task | null> {
        return await TaskModel.findOne({ uuid: uuid_task });
    }
    async save(
        id_user: UUID,
        title: String,
        description: String
    ): Promise<void> {
        const task = new Task(id_user, title, description);
        await TaskModel.create(task);
    }
    async update(task: Task): Promise<void> {
        console.log(task.uuid)
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
