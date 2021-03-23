import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SUPPORT_ROUTING_MODULE } from './support.routing';

import { SupportAddEditComponent } from './support-add-edit/support-add-edit.component';
import { SupportViewComponent } from './support-view/support-view.component';



@NgModule({
  declarations: [SupportAddEditComponent, SupportViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SUPPORT_ROUTING_MODULE
  ]
})
export class SupportModule { }
