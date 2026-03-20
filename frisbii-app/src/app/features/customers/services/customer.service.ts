import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerListModel } from '../models/customer.model';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http = inject(HttpClient);

  env = environment;

  async loadAllCustomers():Promise<CustomerListModel> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('priv_xxx:priv_e441cc05efb2ecc32bff2b9336c6b54d')
    });

    const response = await firstValueFrom(
      this.http.get<{ results: CustomerListModel }>(
        `${this.env.apiRoot}/list/customer`, { headers }
      )
    );
    return response.results;
  }
}
