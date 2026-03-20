import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http = inject(HttpClient);

  env = environment;

  async loadAllCustomers():Promise<Customer> {
    const response = await firstValueFrom(
      this.http.get<{ results: Customer }>(
        `${this.env.apiRoot}/v1/customer/{'customer001'}`,
      )
    );
    return response.results;
  }
}
