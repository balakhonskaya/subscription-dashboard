export interface CustomerListModel {
  content: Customer[];
  size?: number;
}

export interface Customer {
  handle: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  created?: string; 
}
