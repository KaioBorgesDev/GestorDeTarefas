import TaskRepository from "src/adapters/repository/TaskRepository";
import { Task } from "src/entitie/Task";

export default class ListTask {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(): Promise<Task[]> {
        return await this.taskRepository.getAll();
    }
}
