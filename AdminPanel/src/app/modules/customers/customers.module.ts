import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomersAddEditComponent } from './customers-add-edit/customers-add-edit.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CUSTOMER_ROUTING } from './customers.routing';


@NgModule({
  declarations: [CustomersAddEditComponent, CustomersViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CUSTOMER_ROUTING
  ]
})
export class CustomersModule { }
