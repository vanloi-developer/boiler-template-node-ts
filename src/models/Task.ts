import { model } from "mongoose";

import { TaskSchema } from "src/dataAccess/schemas";

import { ITask } from "../interfaces/";

export const TaskModel = model<ITask>("task", TaskSchema);
