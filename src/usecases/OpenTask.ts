import TaskRepository from "src/adapters/repository/TaskRepository";
import { Task } from "src/entitie/Task";


export default class OpenTask {
    constructor(readonly TaskRepository: TaskRepository) {}

    async execute(task: Task): Promise<void> {
        return await this.TaskRepository.save(task);
    }
}

