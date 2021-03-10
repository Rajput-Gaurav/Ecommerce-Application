import { RouterModule, Routes } from '@angular/router';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';
import { GroceryComponent } from './grocery/grocery.component';

export const GROCERY_ROUTING: Routes = [
    { path: 'grocery', component: GroceryComponent },
    { path: 'grocery/groceryDetails/:Id', component: GroceryDetailsComponent }
];

export const GROCERY_ROUTING_MODULE = RouterModule.forChild(GROCERY_ROUTING);