import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardVM } from './card.model';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: true
})
export class Card {

  item = input.required<CardVM>();

  routerLink = input<string>();
  
  /*customer: CardVM = {
    card_handle: 'cust-0100',
    card_full_name: 'Janeva Rauprich',
    card_email: 'jrauprich2r@indiegogo.com',
    card_country: 'Germany',
    card_company: 'Tazzy',
    card_address_line1: '6428 Farragut Terrace, 12th Floor',
    card_address_line2: 'Frankfurt am Main',
  };*/
}
