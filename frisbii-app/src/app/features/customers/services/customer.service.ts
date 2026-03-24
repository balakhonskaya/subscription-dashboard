import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer, CustomerListModel } from '../models/customer.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http = inject(HttpClient);

  env = environment;

  async loadAllCustomers(): Promise<CustomerListModel> {
    const response = await firstValueFrom(
      this.http.get<CustomerListModel>(`${this.env.apiRoot}/v1/list/customer?size=30`),
    );
    return response;
  }

  async getCustomerByHandle(handle: string): Promise<Customer> {
    const customer = await firstValueFrom(
      this.http.get<Customer>(`${this.env.apiRoot}/v1/customer/${handle}`),
    );

    return {
      ...customer,
      handle,
    };
  }
}
