import { UUID } from "crypto";

export type OpenTaskDTO = {
    id_user: UUID;
    title: String;
    description: String;
    created_At: Date;
    status: "Pendente" | "Concluída";
}