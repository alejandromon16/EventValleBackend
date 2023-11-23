import { HttpStatus } from '@nestjs/common';

interface ErrorDetails {
  statusCode: HttpStatus;
  type: string;
  explanation: string;
}

class ApiError extends Error {
  details: ErrorDetails;

  constructor(message: string, details: ErrorDetails) {
    super(message);
    this.name = 'GraphQLApiError';
    this.details = details;
  }
}

export default ApiError;
