import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { SubscriptionListModel } from '../../models/subscription.model';
import { SubscriptionService } from '../../services/subscription.service';

export const subscriptionResolver: ResolveFn<SubscriptionListModel | null> = async (
  route: ActivatedRouteSnapshot,
) => {
  const handle = route.paramMap.get('handle');

  if (!handle) {
    return null;
  }

  const subscriptionService = inject(SubscriptionService);
  return subscriptionService.loadSubscriptionsByCustomer(handle, 10);
};
