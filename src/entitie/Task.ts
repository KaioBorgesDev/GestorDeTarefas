import { UUID } from "node:crypto";

export class Task {
    uuid: String;
    id_user: UUID;
    title: String;
    description: String;
    created_At: Date;
    status: "Pendente" | "Concluída";

    constructor(
        id_user: UUID,
        title: String,
        description: String,
        created_At: Date,
        status: "Pendente" | "Concluída"
    ) {
        this.id_user = id_user;
        this.title = title;
        this.description = description;
        this.created_At = created_At;
        this.status = status;
    }

    validateDate(){
        if (isNaN(new Date(this.created_At).getTime()))
            throw new Error('Data de criação inválida.')
    }
    validateUpdate() {
        this.validateDate();
        if (this.title === "" || this.description === "")
            throw new Error("Titulo ou Descrição estão vazios.");
    }
    validateClose() {
        this.validateDate();
        if (this.status === "Concluída")
            throw new Error("A Tarefa já está concluída.");
    }
    validateSave(){
        this.validateDate();
        this.validateUpdate();
        if(this.created_At > new Date())
            throw new Error('A data de criação está no futuro.');

    }
}