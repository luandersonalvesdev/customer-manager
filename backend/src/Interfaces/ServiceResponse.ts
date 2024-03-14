export type ServiceMessage = { message: string };

type ServiceResponseErrorStatusType = 'CREATED' | 'BAD_REQUEST' | 'CONFLICT' | 'INTERNAL_SERVER_ERROR';

type ServiceResponseSuccessStatusType = 'SUCCESS' | 'CREATED';

export type ServiceResponseError = {
  status: ServiceResponseErrorStatusType | string,
  data: ServiceMessage,
};

export type ServiceResponseSucess<T> = {
  status: ServiceResponseSuccessStatusType
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSucess<T>;
