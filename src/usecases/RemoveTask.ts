import { UUID } from "crypto";
import TaskRepository from "src/adapters/repository/TaskRepository";

export default class RemoveTask {
    constructor(readonly TaskRepository: TaskRepository) {}

    async execute(uuid_task: UUID): Promise<void> {
        return await this.TaskRepository.remove(uuid_task);
    }
}
