import { UUID } from "crypto";
import TaskRepository from "src/adapters/repository/TaskRepository";

export default class GetTask {
    constructor(readonly taskRepository: TaskRepository) {}

    async execute(uuid: UUID) {
        return this.taskRepository.get(uuid);
    }
}
