interface BaseSuccessResponse<T> {
  success: true;
  data?: T;
}

interface BaseErrorResponse {
  success: false;
  message: string;
  code: number;
}

export type BaseResponse<T> = BaseSuccessResponse<T> | BaseErrorResponse;
