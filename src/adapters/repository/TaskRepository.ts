import { UUID } from "crypto";
import { Task } from "src/entitie/Task";

export default interface TaskRepository {
    save(id_user: UUID, title: String, description: String): Promise<void>;
    update(task: Task): Promise<void>;
    remove(uuid_task: UUID): Promise<void>;
    close(uuid_task: UUID): Promise<void>;
    get(uuid_task: UUID): Promise<Task | null>;
    getAll(): Promise<Task[]>;
    listByStatus(status: "Pendente" | "Concluída"): Promise<Task[]>;
}
