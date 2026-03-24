import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../../shared/loading/loading.service';
import { finalize } from 'rxjs/operators';

export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const loadingService = inject(LoadingService);
  loadingService.loadingOn();
  return next(req).pipe(
    finalize(() => {
      loadingService.loadingOff();
    }),
  );
};
