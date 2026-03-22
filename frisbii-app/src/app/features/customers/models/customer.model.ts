export interface CustomerListModel {
  content: Customer[];
  size?: number;
}

export interface Customer {
  handle: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  company?: string;
  created?: string;
  postal_code?: string;
  city?: string;
  country?: string;
  address?: string;
  address2?: string;
}
