import { Model, Document } from "mongoose";
import { ApiError } from "src/app/core";

/**
 * Lack of interface, need to implement 2 interfaces more, IWrite<T>, IRead<T>
 */
abstract class BaseRepository<T extends Document> {
  public _model: Model<unknown, {}, {}>;

  constructor(model: Model<unknown, {}, {}>) {
    this._model = model;
  }

  public save = async (item: T) => {
    try {
      const isCreated = await item.save();

      if (isCreated) return isCreated;

      throw new ApiError(200, `Error in repository`);
    } catch (error) {
      throw error;
    }
  };

  public update = async (item: T) => {
    try {
      const id = item.id;

      const isUpdated = await this._model.replaceOne(id, item);

      return isUpdated ? isUpdated : new ApiError(200, `Error in repository`);
    } catch (error) {
      throw error;
    }
  };

  public delete = async (id: number) => {
    try {
      const isDeleted = await this._model.findByIdAndDelete(id);

      return true ? isDeleted : new ApiError(200, `Error in repository`);
    } catch (error) {
      throw error;
    }
  };

  public findById = async (id: number) => {
    try {
      const item = await this._model.findOne();

      return item ? item : new ApiError(200, `Error in repository`);
    } catch (error) {
      throw error;
    }
  };

  public retrieve = async () => {
    try {
      const items = await this._model.find();

      return items ? items : new ApiError(200, `Error in repository`);
    } catch (error) {
      throw error;
    }
  };
}

Object.seal(BaseRepository);
export { BaseRepository };
