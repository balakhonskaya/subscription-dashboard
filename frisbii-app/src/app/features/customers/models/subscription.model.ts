export interface Subscription {
  handle: string;
  state: string;
  plan?: string;
  customer?: string;
  created?: string;
}

export interface SubscriptionListModel {
  content: Subscription[];
}
