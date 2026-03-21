import { Component, effect, inject, signal } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerListModel } from '../../models/customer.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-customer-list',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTableModule, DatePipe],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  customerList = signal<CustomerListModel>({ content: [] });
  customerService = inject(CustomerService);
  title = 'Customer';

   displayedColumns: string[] = [
    'handle',
    'name',
    'email',
    'company',
    'created'
  ];


  constructor() {
    this.loadCustomerList();
    effect(() => {
      console.log('Customer List:', this.customerList().content);
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
