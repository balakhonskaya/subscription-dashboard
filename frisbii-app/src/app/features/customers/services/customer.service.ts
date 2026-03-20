import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CustomerListModel } from '../models/customer.model';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http = inject(HttpClient);

  env = environment;

  async loadAllCustomers():Promise<CustomerListModel> {


    const response = await firstValueFrom(
      this.http.get<CustomerListModel>(
        `${this.env.apiRoot}/v1/list/customer`
      )
    );
    return response;
  }
}
