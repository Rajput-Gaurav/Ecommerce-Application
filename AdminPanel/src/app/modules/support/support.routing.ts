import { RouterModule, Routes } from '@angular/router';
import { SupportAddEditComponent } from './support-add-edit/support-add-edit.component';
import { SupportViewComponent } from './support-view/support-view.component';

export const SUPPORT_ROUTING: Routes = [

    { path: '', component: SupportViewComponent },
    { path: 'addSupport', component: SupportAddEditComponent },
    { path: 'editSupport/:Id', component: SupportAddEditComponent }
];

export const SUPPORT_ROUTING_MODULE = RouterModule.forChild(SUPPORT_ROUTING);