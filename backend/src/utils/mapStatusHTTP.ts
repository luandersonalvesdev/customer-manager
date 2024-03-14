export const CREATED = 'CREATED';
export const BAD_REQUEST = 'BAD_REQUEST';

export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case CREATED: return 201;
    case BAD_REQUEST: return 400;
    default: return 500;
  }
}
