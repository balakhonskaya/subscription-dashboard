import { Component, inject, signal } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerListModel } from '../../models/customer.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [NgFor],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  customerList = signal<CustomerListModel>({ content: [] });
  customerService = inject(CustomerService);
  title = 'Customer List';


  constructor() {
    this.loadCustomerList();
  }

  async loadCustomerList() {
    try {
      const customers = await this.customerService.loadAllCustomers();
      this.customerList.set(customers);
    }
    catch(err) {
      console.error(err);
    }
  }

}
