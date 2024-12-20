import { UUID } from "crypto";
import TaskRepository from "src/adapters/repository/TaskRepository";


export default class CloseTask {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(uuid: UUID): Promise<void> {
        return await this.taskRepository.close(uuid);
    }
}
