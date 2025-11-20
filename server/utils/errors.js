class ApiError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }

  static badRequest(msg) {
    return new ApiError(msg, 400);
  }
  
  static notFound(msg) {
    return new ApiError(msg, 404);
  }

  static unauthorized(msg) {
    return new ApiError(msg, 401);
  }

  static forbidden(msg) {
    return new ApiError(msg, 403);
  }
}

export default ApiError;