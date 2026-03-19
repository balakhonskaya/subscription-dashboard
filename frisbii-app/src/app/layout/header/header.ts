import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [Navigation, MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
