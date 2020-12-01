class ShopifyError extends Error {}

class InvalidHmacError extends ShopifyError {}

class SafeCompareError extends ShopifyError {}

class HttpRequestError extends ShopifyError {}
class HttpMaxRetriesError extends ShopifyError {}
class HttpResponseError extends ShopifyError {
  public constructor(message: string, readonly code: number, readonly statusText: string) {
    super(message);
  }
}
class HttpRetriableError extends ShopifyError {}
class HttpInternalError extends HttpRetriableError {}
class HttpThrottlingError extends HttpRetriableError {}

const ShopifyErrors = {
  ShopifyError,
  InvalidHmacError,
  SafeCompareError,
  HttpRequestError,
  HttpMaxRetriesError,
  HttpResponseError,
  HttpRetriableError,
  HttpInternalError,
  HttpThrottlingError,
};

export default ShopifyErrors;