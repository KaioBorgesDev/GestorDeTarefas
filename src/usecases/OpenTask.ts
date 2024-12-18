import { UUID } from "crypto";
import TaskRepository from "src/adapters/repository/TaskRepository";
import { Task } from "src/entitie/Task";

export default class OpenTask {
    constructor(readonly TaskRepository: TaskRepository) {}

    async execute(task: INPUT): Promise<void> {
        return await this.TaskRepository.save(task);
    }
}

type INPUT = {
    id_user: UUID;
    title: String;
    description: String;
    created_At: Date;
    status: "Pendente" | "Concluída";
};
