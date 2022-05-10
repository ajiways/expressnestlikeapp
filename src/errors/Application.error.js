export class ApplicationError extends Error {
  constructor(error) {
    const { message } = error;

    super(message);
  }
}
