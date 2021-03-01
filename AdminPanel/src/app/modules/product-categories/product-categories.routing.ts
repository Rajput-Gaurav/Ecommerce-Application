import { RouterModule, Routes } from '@angular/router';
import { ProductCategoriesViewComponent } from './product-categories-view/product-categories-view.component';
import { ProductCategoriesAddEditComponent } from './product-categories-add-edit/product-categories-add-edit.component';

export const ProductCategory: Routes = [
    { path: '', component: ProductCategoriesViewComponent },
    { path: 'addProductCategories', component: ProductCategoriesAddEditComponent },
    { path: 'editProductCategories/:Id', component: ProductCategoriesAddEditComponent }
];

export const ProductCategoryRouting = RouterModule.forChild(ProductCategory);
