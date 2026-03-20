export interface CustomerListModel {
  content: Customer[];
  hasMore?: boolean;
  total?: number;
}

export interface Customer {
  handle: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  created?: string; 
}
