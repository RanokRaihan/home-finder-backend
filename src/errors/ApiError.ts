class ApiError extends Error {
  public statusCode: number;
  public path: string;

  constructor(
    statusCode: number,
    message = "something went wrong!",
    path = "global",
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.path = path;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
