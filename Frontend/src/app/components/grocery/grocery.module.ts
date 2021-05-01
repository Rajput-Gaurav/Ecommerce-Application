import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroceryComponent } from './grocery/grocery.component';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { GROCERY_ROUTING_MODULE } from './grocery.routing';

import { GroceryService } from '../../services/grocery.service';

@NgModule({
  declarations: [GroceryComponent, GroceryDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    GROCERY_ROUTING_MODULE
  ],
  providers: [GroceryService]
})
export class GroceryModule { }
