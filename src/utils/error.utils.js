export class ServiceError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}
