import { ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import { Customer } from "../../models/customer.model";
import { inject } from "@angular/core/primitives/di";
import { CustomerService } from "../../services/customer.service";

export const customerResolver: ResolveFn<Customer | null> =
  async (route: ActivatedRouteSnapshot) => {
    const handle = route.paramMap.get("handle");
    if (!handle) {
      return null;
    }
    const customerService = inject(CustomerService);
    return customerService.getCustomerByHandle(handle);
}