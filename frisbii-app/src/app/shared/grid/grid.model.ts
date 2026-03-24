export interface GridVM {
  rows: SubscriptionRow[];
}

export interface SubscriptionRow {
  handle: string;
  created?: string;
  //subscriptionState: SubscriptionState;
  //amount?: string;
  //subscription_plan_handle?: string;
  //can_pause?: boolean;
  //can_unpause?: boolean;
}

export type SubscriptionState = 'active' | 'cancelled' | 'expired' | 'on_hold' | 'unknown';

export type InvoiceState = 'created' | 'pending' | 'settled' | 'authorized' | 'failed' | 'unknown';
