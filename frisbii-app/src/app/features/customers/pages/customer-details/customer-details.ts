import { Component, inject, signal } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CardVM } from '../../../../shared/card/card.model';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../../../shared/card/card';

@Component({
  selector: 'app-customer-details',
  imports: [Card],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.scss',
})
export class CustomerDetails {

  customer = signal<Customer>({handle: 'cust001', first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com'} as Customer);

  route = inject(ActivatedRoute);


/*
  ngOnInit() {
    this.customer.set(this.route.snapshot.data["customer"]);
  }*/

   customerToCardVM(customer: Customer): CardVM {
          return {
            card_handle: customer.handle,
            card_full_name: customer.first_name + ' ' + customer.last_name,
            card_email: customer.email,
            card_country: customer.country,
            card_company: customer.company,
            card_address_line1: customer.postal_code + ' ' + customer.address + ' ' + customer.address2,
            card_address_line2: customer.city,
          };
        }
}

        