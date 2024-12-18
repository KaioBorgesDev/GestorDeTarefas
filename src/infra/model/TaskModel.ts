import { Schema, model } from "mongoose";
import crypto from "node:crypto";

const TaskSchema = new Schema({
    uuid: { type: String, default: crypto.randomUUID },
    id_user: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    created_At: { type: Date, default: Date.now() },
    status: {
        type: String,
        enum: ["Pendente", "Concluída"],
        default: "Concluída",
    },
});

const TaskModel = model("task", TaskSchema);

export default TaskModel;
