import { RouterModule, Routes } from '@angular/router';
import { GroceryAddEditComponent } from './grocery-add-edit/grocery-add-edit.component';
import { GroceryViewComponent } from './grocery-view/grocery-view.component';

export const GROCERY_ROUTING: Routes = [

    { path: '', component: GroceryViewComponent },
    { path: 'addGrocery', component: GroceryAddEditComponent },
    { path: 'editGrocery/:Id', component: GroceryAddEditComponent }
];

export const GROCERY_ROUTING_MODULE = RouterModule.forChild(GROCERY_ROUTING);