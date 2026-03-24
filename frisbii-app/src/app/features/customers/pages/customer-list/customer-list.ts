import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerListModel } from '../../models/customer.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessagesService } from '../../../../shared/messages/messages.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-customer-list',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTableModule, DatePipe, RouterModule],
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

   displayedColumns: string[] = [
    'handle',
    'name',
    'email',
    'company',
    'created'
  ];
 
  async loadCustomerList(): Promise<void> {
    try {
      const customerList = await this.customerService.loadAllCustomers();
      this.customerList.set(customerList);
    } catch (err: unknown) {
      this.messagesService.showMessage(this.getErrorMessage(err), 'success');
      console.error(err);
    }
  }

  ngOnInit(): void {
    this.loadCustomerList();
  }

  private getErrorMessage(err: unknown): string {
  if (err instanceof HttpErrorResponse) {
    switch (err.status) {
      case 0:
        return 'Network error. Please check your internet connection.';
      case 400:
        return 'Bad request.';
      case 401:
        return 'You are not authorized.';
      case 403:
        return 'Access denied.';
      case 404:
        return 'Customer list not found.';
      default:
        if (err.status >= 500) {
          return 'Server error. Please try again later.';
        }
        return `Request failed: ${err.status}`;
    }
  }

  if (err instanceof Error) {
    return err.message;
  }

  return 'Unknown error';
}

}
