import { Component, input } from '@angular/core';
import { GridVM } from './grid.model';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-grid',
  imports: [MatCardModule, MatIcon, MatTableModule, DatePipe],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {
  data = input.required<GridVM>();

  displayedColumns: string[] = ['handle', 'created', 'state', 'plan_handle', 'amount', 'actions'];
}
