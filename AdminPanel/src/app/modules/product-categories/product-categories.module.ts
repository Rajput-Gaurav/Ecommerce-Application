import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoriesAddEditComponent } from './product-categories-add-edit/product-categories-add-edit.component';
import { ProductCategoriesViewComponent } from './product-categories-view/product-categories-view.component';
import { ProductCategoryRouting } from './product-categories.routing';


@NgModule({
  declarations: [ProductCategoriesAddEditComponent, ProductCategoriesViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductCategoryRouting
  ]
})
export class ProductCategoriesModule { }
