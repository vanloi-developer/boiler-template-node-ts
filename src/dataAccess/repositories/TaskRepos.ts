import { BaseRepository } from "./base";

import { ITask } from "../../interfaces";
import { TaskModel } from "src/models";

class TaskRepository extends BaseRepository<ITask> {
  public _model: typeof TaskModel;

  constructor(model: typeof TaskModel = TaskModel) {
    super(model);
  }

  public active = async (id: number) => {
    const isActived = await this._model.updateOne(
      { id },
      { $set: { isDeleted: true } }
    );

    return true ? isActived : false;
  };

  public deActive = async (id: number) => {
    const isActived = await this._model.updateOne(
      { id },
      { $set: { isDeleted: false } }
    );

    return true ? isActived : false;
  };
}

Object.seal(TaskRepository);
export { TaskRepository };
