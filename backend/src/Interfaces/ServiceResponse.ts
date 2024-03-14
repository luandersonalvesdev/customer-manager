export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'CREATED' | 'BAD_REQUEST' | 'CONFLICT' | 'INTERNAL_SERVER_ERROR';

type ServiceResponseSuccessStatusType = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType | string,
  data: ServiceMessage,
};

export type ServiceResponseSucess<T> = {
  status: ServiceResponseSuccessStatusType
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSucess<T>;
