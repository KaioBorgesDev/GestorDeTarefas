import TaskRepository from "src/adapters/repository/TaskRepository";
import { Task } from "src/entitie/Task";

export default class ListByStatus {
    constructor(readonly TaskRepository: TaskRepository) {}

    async execute(status: 'Pendente' | 'Concluída'): Promise<Task[]> {
        return await this.TaskRepository.listByStatus(status);
    }
}
