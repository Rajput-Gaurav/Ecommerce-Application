import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroceryComponent } from './grocery/grocery.component';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';

import { MatButtonModule } from '@angular/material/button';
import { GROCERY_ROUTING_MODULE } from './grocery.routing';

@NgModule({
  declarations: [GroceryComponent, GroceryDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    GROCERY_ROUTING_MODULE
  ]
})
export class GroceryModule { }
