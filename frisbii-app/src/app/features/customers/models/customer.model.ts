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
}
