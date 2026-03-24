import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MessagesService } from '../../shared/messages/messages.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const messagesService = inject(MessagesService);

  return next(req).pipe(
    catchError((error: unknown) => {
      const message = getErrorMessage(error);

      messagesService.showMessage(message, 'error');
      console.error('HTTP Error:', error);

      return throwError(() => error);
    })
  );
};

function getErrorMessage(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) {
      return 'Network error. Please check your internet connection.';
    }

    switch (error.status) {
      case 400:
        return '400 Bad request.';
      case 401:
        return '401 Unauthorized.';
      case 403:
        return '403 Access denied.';
      case 404:
        return '404 Requested resource was not found.';
      case 409:
        return '409 Conflict error.';
      case 422:
        return '422 Validation error.';
      case 500:
        return '500 Internal server error.';
      case 503:
        return '503 Service temporarily unavailable.';
      default:
        if (error.error?.error && typeof error.error.error === 'string') {
          return error.error.error;
        }

        if (error.error?.message && typeof error.error.message === 'string') {
          return error.error.message;
        }

        return `Request failed (${error.status}).`;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unknown error occurred.';
}