import { ApiError } from "../exceptions/ApiError";
import { IResponse } from "./interfaces";

class DataResponse implements IResponse {
  public readonly _error: ApiError | null;

  public readonly _result: any;

  public readonly _success: boolean;

  public readonly _targetUrl: string | null;

  public readonly _unAuthorizedRequest: boolean;

  public readonly ___abp: boolean;

  constructor(
    success: boolean,

    result: any,

    error: ApiError | null,

    targetUrl: string | null = null,

    unAuthorizedRequest: boolean = false,

    __abp: boolean = true
  ) {
    this._error = error;
    this._success = success;

    this._result = result;

    this._error = result;

    this._targetUrl = targetUrl;

    this._unAuthorizedRequest = unAuthorizedRequest;

    this.___abp = __abp;
  }
}

export { DataResponse };
