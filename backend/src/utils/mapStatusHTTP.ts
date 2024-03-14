export const CREATED = 'CREATED';
export const BAD_REQUEST = 'BAD_REQUEST';
export const CONFLICT = 'CONFLICT';
export const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';

export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case CREATED: return 201;
    case BAD_REQUEST: return 400;
    case CONFLICT: return 409;
    default: return 500;
  }
}
