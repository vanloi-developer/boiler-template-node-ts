import { ApiError } from "../../exceptions/ApiError";

export interface IResponse  {
  _error?: ApiError | null;

  _result: any;

  _success: boolean;

  _targetUrl: string | null;

  _unAuthorizedRequest: boolean;

  ___abp: boolean;
}
