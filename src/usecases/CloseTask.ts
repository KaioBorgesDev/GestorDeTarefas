import TaskRepository from "src/adapters/repository/TaskRepository";
import { Task } from "src/entitie/Task";

export default class CloseTask {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(task: Task): Promise<void> {
        return await this.taskRepository.update(task);
    }
}
