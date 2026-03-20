import { Component, effect, inject, signal } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer, CustomerListModel } from '../../models/customer.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  customer = signal<Customer>({} as Customer);
  customerService = inject(CustomerService);
  title = 'Customer';


  constructor() {
    this.loadCustomerList();
    effect(() => {
      console.log('Customer:', this.customer());
    });
  }

  async loadCustomerList() {
    try {
      const customer = await this.customerService.loadAllCustomers();
      this.customer.set(customer);
    }
    catch(err) {
      console.error(err);
    }
  }

}
