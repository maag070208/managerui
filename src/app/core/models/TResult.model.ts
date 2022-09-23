export interface TResult<T>{
    success: boolean;
    messages?: string[];
    message: string;
    data: T;
}


export interface CommonError {
    errors?: any;
    status?: number;
    title?: string;
    traceId?: string;
    messages?: string[];
  }
  