import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SubscriptionListModel } from '../models/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private http = inject(HttpClient);
  private env = environment;

  async loadSubscriptionsByCustomer(handle: string, size = 30): Promise<SubscriptionListModel> {
    const response = await firstValueFrom(
      this.http.get<SubscriptionListModel>(`${this.env.apiRoot}/v1/list/subscription`, {
        params: {
          size: size.toString(),
          customer: handle,
        },
      }),
    );

    return response;
  }
}
