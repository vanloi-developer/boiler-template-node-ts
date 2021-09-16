import { TaskRepository } from "src/dataAccess/repositories/TaskRepos";
import { TaskDto } from "../dto/requests";
import { BaseService } from "./base";

class TaskService extends BaseService {
  public _repos: TaskRepository;

  constructor() {
    super();
    this._repos = new TaskRepository();
  }

  public save = async (item: TaskDto) => {
    try {
      return await this._repos.save(item);
    } catch (error) {
      throw error;
    }
  };

  public delete = async (id: number) => {
    try {
      return await this._repos.delete(id);
    } catch (error) {
      throw error;
    }
  };

  public getAll = async () => {
    try {
      return await this._repos.retrieve();
    } catch (error) {
      throw error;
    }
  };

  public active = async (id: number) => {
    try {
      return await this._repos.active(id);
    } catch (error) {
      throw error;
    }
  };

  public deActive = async (id: number) => {
    try {
      return await this._repos.deActive(id);
    } catch (error) {
      throw error;
    }
  };
}

Object.seal(TaskService);
export { TaskService };
