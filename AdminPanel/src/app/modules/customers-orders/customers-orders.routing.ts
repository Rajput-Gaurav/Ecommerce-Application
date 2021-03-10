import { RouterModule, Routes } from '@angular/router';
import { CustomersOrdersAddEditComponent } from './customers-orders-add-edit/customers-orders-add-edit.component';
import { CustomersOrdersViewComponent } from './customers-orders-view/customers-orders-view.component';

export const CUSTOMERS_ORDERS: Routes = [
    { path: '', component: CustomersOrdersViewComponent },
    { path: 'addCustomersOrders', component: CustomersOrdersAddEditComponent },
    { path: 'editCustomersOrders/:Id', component: CustomersOrdersAddEditComponent }
];

export const CUSTOMERS_ORDERS_ROUTING = RouterModule.forChild(CUSTOMERS_ORDERS);