import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerListModel } from '../../models/customer.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessagesService } from '../../../../shared/messages/messages.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-customer-list',
  imports: [MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    DatePipe,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList implements OnInit {
  customerService = inject(CustomerService);
   messagesService = inject(MessagesService);

   customerList = signal<CustomerListModel>({
    content: [],
  } as CustomerListModel);
  
  title = 'Customer';
  searchHandle = signal('');

   displayedColumns: string[] = [
    'handle',
    'name',
    'email',
    'company',
    'created'
  ];

  filteredCustomers = computed(() => {
    const term = this.searchHandle().trim().toLowerCase();

    if (!term) {
      return this.customerList().content;
    }

    return this.customerList().content.filter(customer =>
      customer.handle?.toLowerCase().includes(term)
    );
  });

 
async loadCustomerList() {
  try {
    const customerList = await this.customerService.loadAllCustomers();
    this.customerList.set(customerList);
  } catch (err) {
    console.error('loadCustomerList failed', err);
  }
}

onSearchChange(value: string) {
    this.searchHandle.set(value);
  }

  clearSearch() {
    this.searchHandle.set('');
  }

  ngOnInit(): void {
    this.loadCustomerList();
  }

}
