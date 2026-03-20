import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomerList } from '../../features/customers/pages/customer-list/customer-list';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, MatSidenavModule, CustomerList],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
