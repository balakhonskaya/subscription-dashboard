import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Basic ' + btoa('priv_xxx:priv_e441cc05efb2ecc32bff2b9336c6b54d')
    }
  });

  return next(authReq);
};