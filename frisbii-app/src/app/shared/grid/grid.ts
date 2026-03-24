import { Component, input } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {
  item = input.required<unknown>();
}
