import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroceryAddEditComponent } from './grocery-add-edit/grocery-add-edit.component';
import { GroceryViewComponent } from './grocery-view/grocery-view.component';

import { GROCERY_ROUTING_MODULE } from './grocery.routing';

@NgModule({
  declarations: [GroceryAddEditComponent, GroceryViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    GROCERY_ROUTING_MODULE
  ]
})
export class GroceryModule { }
