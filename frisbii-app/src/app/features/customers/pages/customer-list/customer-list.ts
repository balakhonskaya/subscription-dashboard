import { Component, effect, inject, signal } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerListModel } from '../../models/customer.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  customerList = signal<CustomerListModel>({ content: [] });
  customerService = inject(CustomerService);
  title = 'Customer';


  constructor() {
    this.loadCustomerList();
    effect(() => {
      console.log('Customer List:', this.customerList());
    });
  }

  async loadCustomerList() {
    try {
      const customerList = await this.customerService.loadAllCustomers();
      this.customerList.set(customerList);
    }
    catch(err) {
      console.error(err);
    }
  }

}
