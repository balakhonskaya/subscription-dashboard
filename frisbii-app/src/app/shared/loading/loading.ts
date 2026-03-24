import {Component, inject, Signal} from "@angular/core";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import { LoadingService } from "./loading.service";

@Component({
  selector: 'app-loading',
  imports: [MatProgressSpinner],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading {

   loadingService = inject(LoadingService);

    loading: Signal<boolean> =this.loadingService.loaiding;
}
