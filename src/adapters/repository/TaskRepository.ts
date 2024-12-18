import { UUID } from "crypto";
import { Task } from "src/entitie/Task";

export default interface TaskRepository{

    save(task: Task) : Promise<void>;
    update(task: Task) : Promise<void>;
    remove(uuid_task: String): Promise<void>;
    get(uuid_task: String): Promise<Task | null>
    getAll(): Promise<Task[]>;
    listByStatus(status: 'Pendente' | 'Concluída') : Promise<Task[]>;
    
}
