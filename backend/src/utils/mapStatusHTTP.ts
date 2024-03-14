export const CREATED = 'CREATED';
export const BAD_REQUEST = 'BAD_REQUEST';
export const CONFLICT = 'CONFLICT';
export const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';
export const SUCCESS = 'SUCCESS';
export const NOT_FOUND = 'NOT_FOUND';

export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case SUCCESS: return 200;
    case CREATED: return 201;
    case BAD_REQUEST: return 400;
    case NOT_FOUND: return 404;
    case CONFLICT: return 409;
    default: return 500;
  }
}
