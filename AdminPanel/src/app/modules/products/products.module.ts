import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsRouting } from './products.routing';


@NgModule({
  declarations: [ProductsAddEditComponent, ProductsViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ProductsRouting
  ]
})
export class ProductsModule { }
