import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, MatSidenavModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
