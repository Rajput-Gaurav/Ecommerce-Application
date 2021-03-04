import { RouterModule, Routes } from '@angular/router';
import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component';
import { ProductsViewComponent } from './products-view/products-view.component';

export const Products: Routes = [
    { path: '', component: ProductsViewComponent },
    { path: 'addProducts', component: ProductsAddEditComponent },
    { path: 'editProducts/:Id', component: ProductsAddEditComponent }
];

export const ProductsRouting = RouterModule.forChild(Products);