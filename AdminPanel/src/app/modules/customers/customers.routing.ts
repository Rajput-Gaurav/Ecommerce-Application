import { RouterModule, Routes } from '@angular/router';
import { CustomersAddEditComponent } from './customers-add-edit/customers-add-edit.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';

export const CUSTOMERS_ROUTE: Routes = [
    { path: '', component: CustomersViewComponent },
    { path: 'addCustomers', component: CustomersAddEditComponent },
    { path: 'editCustomers/:Id', component: CustomersAddEditComponent }
];

export const CUSTOMER_ROUTING = RouterModule.forChild(CUSTOMERS_ROUTE);