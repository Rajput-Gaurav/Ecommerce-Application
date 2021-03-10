import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomersOrdersAddEditComponent } from './customers-orders-add-edit/customers-orders-add-edit.component';
import { CustomersOrdersViewComponent } from './customers-orders-view/customers-orders-view.component';

import { CUSTOMERS_ORDERS_ROUTING } from './customers-orders.routing';

@NgModule({
  declarations: [CustomersOrdersAddEditComponent, CustomersOrdersViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CUSTOMERS_ORDERS_ROUTING
  ]
})
export class CustomersOrdersModule { }
