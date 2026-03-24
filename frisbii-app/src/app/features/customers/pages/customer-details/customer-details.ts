import { Component, inject, OnInit, signal } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CardVM } from '../../../../shared/card/card.model';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../../../shared/card/card';
import { Subscription } from '../../models/subscription.model';
import { GridVM, SubscriptionRow } from '../../../../shared/grid/grid.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-customer-details',
  imports: [Card, MatCardModule],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.scss',
})
export class CustomerDetails implements OnInit {
  customer = signal<Customer | null>(null);
  subscriptions = signal<Subscription[]>([]);
  gridVm = signal<GridVM>({
    rows: [],
  });

  route = inject(ActivatedRoute);

  ngOnInit() {
    const data = this.route.snapshot.data;

    this.customer.set(data['customer'] ?? null);

    this.customer.set(data['customer'] ?? null);
    this.subscriptions.set(data['subscriptions']?.content ?? []);

    //this.gridVm.set(this.subscriptionsToGridVM(subscriptions));
  }

  customerToCardVM(customer: Customer): CardVM {
    return {
      card_handle: customer.handle,
      card_full_name: customer.first_name + ' ' + customer.last_name,
      card_email: customer.email,
      card_country: customer.country,
      card_company: customer.company,
      card_postal_code: customer.postal_code,
      card_address_line1: customer.address + ' ' + customer.address2,
      card_address_line2: customer.city,
    };
  }

  private mapToRow(sub: Subscription): SubscriptionRow {
    return {
      handle: sub.handle,
      created: sub.created,
    };
  }

  subscriptionsToGridVM(subscriptions: Subscription[]): GridVM {
    return {
      rows: subscriptions.map(this.mapToRow),
    };
  }
}
